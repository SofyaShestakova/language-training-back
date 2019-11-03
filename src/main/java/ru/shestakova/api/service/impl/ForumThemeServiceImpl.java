package ru.shestakova.api.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.shestakova.api.model.filter.ForumThemeFilter;
import ru.shestakova.api.model.forum.ForumTheme;
import ru.shestakova.api.model.forum.MessageTerminationStatus;
import ru.shestakova.api.model.forum.ThemeTerminationStatus;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.forum.CreateThemeRequest;
import ru.shestakova.api.request.forum.EditThemeRequest;
import ru.shestakova.api.response.forum.CreateThemeResponse;
import ru.shestakova.api.response.forum.EditThemeResponse;
import ru.shestakova.api.response.forum.GetThemesResponse;
import ru.shestakova.api.response.forum.TerminateThemeResponse;
import ru.shestakova.api.service.ForumThemeService;
import ru.shestakova.api.service.exception.PermissionException;
import ru.shestakova.model.ForumMessage;
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
public class ForumThemeServiceImpl implements ForumThemeService {

  private ServiceUserRepository userRepository;
  private ForumThemeRepository themeRepository;
  private ForumMessageRepository messageRepository;

  @Transactional
  @Override public CreateThemeResponse createTheme(Long initiatorId, CreateThemeRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new CreateThemeResponse().setStatus(CreateThemeResponse.Status.INITIATOR_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    String themeName = request.getThemeName();

    String text = request.getText();

    if (!userRole.isCanCreateThemes()) {
      throw new PermissionException();
    }

    Long now = Instant.now().toEpochMilli();

    ru.shestakova.model.ForumTheme theme = themeRepository.save(
        new ru.shestakova.model.ForumTheme()
            .setAuthor(user)
            .setThemeName(themeName)
            .setTotalMessages(1)
            .setLastMessageDate(now)
            .setTerminationStatus(ThemeTerminationStatus.OPENED.getValue())
    );

    ForumMessage message = new ForumMessage()
        .setTheme(theme)
        .setAuthor(user)
        .setText(text)
        .setTerminationStatus(MessageTerminationStatus.EXISTS.getValue());
    message.setCreateDate(now);
    messageRepository.save(message);
    theme.setMessage(message);

    return new CreateThemeResponse()
        .setStatus(CreateThemeResponse.Status.SUCCESS)
        .setTheme(mapFrom(theme));
  }

  @Override public Optional<ForumTheme> getTheme(Integer themeId) {
    return themeRepository.findById(themeId).map(Mappers::mapFrom);
  }

  @Override
  public GetThemesResponse findThemesByFilter(ForumThemeFilter filter) {
    List<ForumTheme> themes = themeRepository.findThemesByFilter(mapFrom(filter)).stream()
                                .map(Mappers::mapFrom)
                                .collect(Collectors.toList());
    return new GetThemesResponse()
        .setLength(themes.size())
        .setThemes(themes);
  }

  @Override
  @Transactional
  public EditThemeResponse editTheme(Long initiatorId, Integer themeId, EditThemeRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new EditThemeResponse().setStatus(EditThemeResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.ForumTheme> themeOptional = themeRepository.findById(themeId);
    if (themeOptional.isPresent()) {
      return new EditThemeResponse().setStatus(EditThemeResponse.Status.THEME_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.ForumTheme theme = themeOptional.get();

    if (!user.getUserId().equals(theme.getAuthor().getUserId())) {
      UserRole othersRole = UserRole.fromId(theme.getAuthor().getRole());

      if (userRole.compare(othersRole) <= 0 || !userRole.isCanEditOthersThemes()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanEditHisThemes()) {
      throw new PermissionException();
    }

    theme.setThemeName(request.getThemeName());
    return new EditThemeResponse()
        .setStatus(EditThemeResponse.Status.SUCCESS)
        .setTheme(mapFrom(theme));
  }

  @Transactional
  @Override
  public TerminateThemeResponse terminateTheme(Long initiatorId, Integer themeId,
      ThemeTerminationStatus terminationStatus) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new TerminateThemeResponse()
          .setStatus(TerminateThemeResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.ForumTheme> themeOptional = themeRepository.findById(themeId);
    if (themeOptional.isPresent()) {
      return new TerminateThemeResponse().setStatus(TerminateThemeResponse.Status.THEME_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.ForumTheme theme = themeOptional.get();
    ThemeTerminationStatus previousStatus = ThemeTerminationStatus.fromNumeric(theme.getTerminationStatus());

    if (!user.getUserId().equals(theme.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(theme.getAuthor().getRole());
      if (userRole.compare(otherRole) <= 0) {
        throw new PermissionException();
      }

      switch (terminationStatus) {
        case OPENED:
          if (!userRole.isCanOpenOthersThemes()) {
            throw new PermissionException();
          }
          break;
        case CLOSED:
          if (!userRole.isCanCloseOthersThemes()) {
            throw new PermissionException();
          }
          break;
        case ARCHIVED:
          if (!userRole.isCanArchiveOthersThemes()) {
            throw new PermissionException();
          }
          break;
        case DELETED:
          if (!userRole.isCanDeleteOthersThemes()) {
            throw new PermissionException();
          }
          break;
      }
    } else {
      switch (terminationStatus) {
        case OPENED:
          if (!userRole.isCanOpenHisThemes()) {
            throw new PermissionException();
          }
          break;
        case CLOSED:
          if (!userRole.isCanCloseHisThemes()) {
            throw new PermissionException();
          }
        case ARCHIVED:
          if (!userRole.isCanArchiveHisThemes()) {
            throw new PermissionException();
          }
          break;
        case DELETED:
          if (!userRole.isCanDeleteHisThemes()) {
            throw new PermissionException();
          }
          break;
      }
    }

    boolean isAllowed = isAllowedTransition(previousStatus, terminationStatus);
    if (!isAllowed) {
      return new TerminateThemeResponse()
          .setStatus(TerminateThemeResponse.Status.FORBIDDEN_TRANSITION)
          .setPreviousStatus(previousStatus)
          .setActualStatus(previousStatus);
    }

    theme.setTerminationStatus(terminationStatus.getValue());
    List<ForumMessage> messages = messageRepository
        .findByThemeThemeId(themeId)
        .stream()
        .filter(message ->
            MessageTerminationStatus.DELETED.getValue() != message.getTerminationStatus())
        .collect(Collectors.toList());

    if (messages.size() != 0) {
      switch (terminationStatus) {
        case OPENED:
          messages.forEach(message ->
              message.setTerminationStatus(MessageTerminationStatus.EXISTS.getValue()));
          break;

        case CLOSED:
          messages.forEach(message ->
              message.setTerminationStatus(MessageTerminationStatus.IN_CLOSED_THEME.getValue()));
          break;
        case ARCHIVED:
          messages.forEach(message ->
              message.setTerminationStatus(MessageTerminationStatus.IN_DELETED_THEME.getValue()));
          break;
        case DELETED:
          messages.forEach(message ->
              message.setTerminationStatus(MessageTerminationStatus.DELETED.getValue()));
          break;
      }
    }

    return new TerminateThemeResponse()
        .setStatus(TerminateThemeResponse.Status.SUCCESS)
        .setPreviousStatus(previousStatus)
        .setActualStatus(terminationStatus);
  }

  private static boolean isAllowedTransition(ThemeTerminationStatus from,
      ThemeTerminationStatus to) {
    if (from == ThemeTerminationStatus.OPENED) {
      return true;
    } else if (from == ThemeTerminationStatus.CLOSED) {
      return to == ThemeTerminationStatus.ARCHIVED || to == ThemeTerminationStatus.DELETED;
    } else if (from == ThemeTerminationStatus.ARCHIVED) {
      return to == ThemeTerminationStatus.DELETED;
    } else if (from == ThemeTerminationStatus.DELETED) {
      return to == ThemeTerminationStatus.DELETED;
    } else {
      throw new IllegalStateException("Unknown state: " + to);
    }
  }
}
