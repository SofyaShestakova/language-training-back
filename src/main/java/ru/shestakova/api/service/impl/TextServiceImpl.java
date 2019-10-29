package ru.shestakova.api.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.model.filter.BankTextFilter;
import ru.shestakova.api.model.text.BankText;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.text.CreateTextRequest;
import ru.shestakova.api.request.text.EditTextRequest;
import ru.shestakova.api.response.text.CreateTextResponse;
import ru.shestakova.api.response.text.DeleteTextResponse;
import ru.shestakova.api.response.text.EditTextResponse;
import ru.shestakova.api.response.text.GetTextsResponse;
import ru.shestakova.api.service.TextService;
import ru.shestakova.api.service.exception.PermissionException;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.BankTextRepository;
import ru.shestakova.repository.ServiceUserRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class TextServiceImpl implements TextService {

  private ServiceUserRepository userRepository;
  private BankTextRepository textRepository;

  @Override public CreateTextResponse createText(Long initiatorId, CreateTextRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new CreateTextResponse().setStatus(CreateTextResponse.Status.INITIATOR_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());

    if (!userRole.isCanCreateTexts()) {
      throw new PermissionException();
    }

    ru.shestakova.model.BankText text = textRepository.save(
        new ru.shestakova.model.BankText()
            .setTitle(request.getTitle())
            .setText(request.getText())
            .setAuthor(user)
    );

    return new CreateTextResponse()
        .setStatus(CreateTextResponse.Status.SUCCESS)
        .setText(mapFrom(text));
  }

  @Override public Optional<BankText> findTextById(Integer textId) {
    return textRepository.findById(textId).map(Mappers::mapFrom);
  }

  @Override public GetTextsResponse findTextsByFilter(BankTextFilter filter) {
    List<BankText> texts = textRepository.findAllByFilter(mapFrom(filter))
                              .stream()
                              .map(Mappers::mapFrom)
                              .collect(Collectors.toList());
    return new GetTextsResponse()
        .setLength(texts.size())
        .setTexts(texts);
  }

  @Override
  public EditTextResponse editText(Long initiatorId, Integer textId, EditTextRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new EditTextResponse().setStatus(EditTextResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.BankText> textOptional = textRepository.findById(textId);
    if (!textOptional.isPresent()) {
      return new EditTextResponse().setStatus(EditTextResponse.Status.TEXT_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.BankText text = textOptional.get();

    if (!user.getUserId().equals(text.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(text.getAuthor().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanEditOthersTexts()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanEditHisTexts()) {
      throw new PermissionException();
    }

    if (request.getTitle() != null) {
      text.setTitle(request.getTitle());
    }
    if (request.getText() != null) {
      text.setText(request.getText());
    }

    return new EditTextResponse()
        .setStatus(EditTextResponse.Status.SUCCESS)
        .setText(mapFrom(text));
  }

  @Override public DeleteTextResponse deleteText(Long initiatorId, Integer textId) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new DeleteTextResponse().setStatus(DeleteTextResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.BankText> textOptional = textRepository.findById(textId);
    if (!textOptional.isPresent()) {
      return new DeleteTextResponse().setStatus(DeleteTextResponse.Status.TEXT_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.BankText text = textOptional.get();

    if (!user.getUserId().equals(text.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(text.getAuthor().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanDeleteOtherTexts()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanDeleteHisTexts()) {
      throw new PermissionException();
    }

    textRepository.delete(text);

    return new DeleteTextResponse()
        .setStatus(DeleteTextResponse.Status.SUCCESS)
        .setText(mapFrom(text));
  }
}
