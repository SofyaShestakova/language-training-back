package ru.shestakova.api.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import ru.shestakova.api.model.filter.ForumMessageFilter;
import ru.shestakova.api.model.forum.ForumMessage;
import ru.shestakova.api.model.forum.MessageTerminationStatus;
import ru.shestakova.api.model.forum.ThemeTerminationStatus;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.forum.CreateMessageRequest;
import ru.shestakova.api.response.forum.CreateMessageResponse;
import ru.shestakova.api.response.forum.EditMessageResponse;
import ru.shestakova.api.response.forum.GetMessagesResponse;
import ru.shestakova.api.response.forum.TerminateMessageResponse;
import ru.shestakova.api.service.ForumMessageService;
import ru.shestakova.api.service.exception.PermissionException;
import ru.shestakova.model.ForumTheme;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.ForumMessageRepository;
import ru.shestakova.repository.ForumThemeRepository;
import ru.shestakova.repository.ServiceUserRepository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class ForumMessageServiceImpl implements ForumMessageService {

  private ServiceUserRepository userRepository;
  private ForumThemeRepository themeRepository;
  private ForumMessageRepository messageRepository;

  @Transactional
  @Override
  public CreateMessageResponse createMessage(Long initiatorId, Integer themeId,
      CreateMessageRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new CreateMessageResponse()
          .setStatus(CreateMessageResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ForumTheme> themeOptional = themeRepository.findById(themeId);
    if (themeOptional.isPresent()) {
      return new CreateMessageResponse().setStatus(CreateMessageResponse.Status.THEME_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ForumTheme theme = themeOptional.get();
    String text = request.getText();
    long now = Instant.now().toEpochMilli();

    if (!userRole.isCanCreateMessages()) {
      throw new PermissionException();
    }

    ru.shestakova.model.ForumMessage message = new ru.shestakova.model.ForumMessage()
        .setAuthor(user)
        .setText(text)
        .setTheme(theme)
        .setTerminationStatus(MessageTerminationStatus.EXISTS.getValue());
    message.setCreateDate(now);
    messageRepository.save(message);

    theme.setTotalMessages(theme.getTotalMessages() + 1);
    theme.setLastMessageDate(now);

    return new CreateMessageResponse()
        .setStatus(CreateMessageResponse.Status.SUCCESS)
        .setMessage(mapFrom(message));
  }

  @Override
  public Optional<ForumMessage> getMessage(
      @PathVariable Integer themeId, Long messageId) {
    return messageRepository.findByMessageIdAndThemeThemeId(messageId, themeId)
                            .map(Mappers::mapFrom);
  }

  @Override
  public GetMessagesResponse getMessagesByFilter(ForumMessageFilter filter) {
    List<ForumMessage> messages = messageRepository.findMessagesByFilter(mapFrom(filter)).stream()
                                    .map(Mappers::mapFrom)
                                    .collect(Collectors.toList());
    return new GetMessagesResponse()
        .setLength(messages.size())
        .setMessages(messages);
  }

  @Transactional
  @Override
  public TerminateMessageResponse deleteMessage(Long initiatorId, Integer themeId, Long messageId) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new TerminateMessageResponse()
          .setStatus(TerminateMessageResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ForumTheme> themeOptional = themeRepository.findById(themeId);
    if (themeOptional.isPresent()) {
      return new TerminateMessageResponse()
          .setStatus(TerminateMessageResponse.Status.THEME_NOT_FOUND);
    }

    Optional<ru.shestakova.model.ForumMessage> messageOptional = messageRepository.findByMessageIdAndThemeThemeId(messageId, themeId);
    if (messageOptional.isPresent()) {
      return new TerminateMessageResponse()
          .setStatus(TerminateMessageResponse.Status.MESSAGE_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ForumTheme theme = themeOptional.get();
    ru.shestakova.model.ForumMessage message = messageOptional.get();
    ThemeTerminationStatus themeStatus = ThemeTerminationStatus.fromNumeric(theme.getTerminationStatus());
    MessageTerminationStatus prevStatus = MessageTerminationStatus.fromNumeric(message.getTerminationStatus());
    long now = Instant.now().toEpochMilli();

    if (!user.getUserId().equals(message.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(message.getAuthor().getRole());

      if (userRole.compare(otherRole) <= 0 || !userRole.isCanDeleteOthersMessages()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanDeleteHisMessages()) {
      throw new PermissionException();
    }

    if (!isAllowedTransition(themeStatus, prevStatus, MessageTerminationStatus.DELETED)) {
      return new TerminateMessageResponse()
          .setStatus(TerminateMessageResponse.Status.FORBIDDEN_TRANSITION)
          .setPreviousStatus(prevStatus)
          .setActualStatus(prevStatus);
    }

    message.setDeleteDate(now);
    message.setTerminationStatus(MessageTerminationStatus.DELETED.getValue()).setEditDate(now);

    return new TerminateMessageResponse()
        .setStatus(TerminateMessageResponse.Status.SUCCESS)
        .setPreviousStatus(prevStatus)
        .setActualStatus(MessageTerminationStatus.DELETED);
  }

  @Transactional
  @Override
  public EditMessageResponse editMessage(Long initiatorId, Integer themeId, Long messageId,
      String text) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new EditMessageResponse().setStatus(EditMessageResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ForumTheme> themeOptional = themeRepository.findById(themeId);
    if (themeOptional.isPresent()) {
      return new EditMessageResponse().setStatus(EditMessageResponse.Status.THEME_NOT_FOUND);
    }

    Optional<ru.shestakova.model.ForumMessage> messageOptional = messageRepository.findByMessageIdAndThemeThemeId(messageId, themeId);
    if (messageOptional.isPresent()) {
      return new EditMessageResponse().setStatus(EditMessageResponse.Status.MESSAGE_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.ForumMessage message = messageOptional.get();

    if (!user.getUserId().equals(message.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(message.getAuthor().getRole());

      if(userRole.compare(otherRole) <= 0 || !userRole.isCanEditOthersMessages()) {
        throw new PermissionException();
      }
    } else if(!userRole.isCanEditHisMessages()) {
      throw new PermissionException();
    }

    message.setText(text);
    message.setEditDate(Instant.now().toEpochMilli());

    return new EditMessageResponse()
        .setStatus(EditMessageResponse.Status.SUCCESS)
        .setMessage(mapFrom(message));
  }

  private static boolean isAllowedTransition(
      ThemeTerminationStatus themeStatus,
      MessageTerminationStatus from,
      MessageTerminationStatus to
  ) {
    if (from == MessageTerminationStatus.EXISTS) {
      return true;
    } else if (from == MessageTerminationStatus.IN_ARCHIVED_THEME) {
      return to == MessageTerminationStatus.EXISTS
          || (themeStatus == ThemeTerminationStatus.ARCHIVED
          && to == MessageTerminationStatus.IN_ARCHIVED_THEME);
    } else if (from == MessageTerminationStatus.IN_CLOSED_THEME) {
      return themeStatus == ThemeTerminationStatus.CLOSED
          && to == MessageTerminationStatus.IN_CLOSED_THEME;
    } else if (from == MessageTerminationStatus.DELETED) {
      return to == MessageTerminationStatus.DELETED;
    } else {
      throw new IllegalArgumentException("Unknown status: " + from.toString());
    }
  }
}
