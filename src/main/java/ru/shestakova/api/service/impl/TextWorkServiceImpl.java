package ru.shestakova.api.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.model.filter.TextWorkFilter;
import ru.shestakova.api.model.text.TextWork;
import ru.shestakova.api.model.text.WorkType;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.text.CreateWorkRequest;
import ru.shestakova.api.request.text.EditWorkRequest;
import ru.shestakova.api.response.text.CreateWorkResponse;
import ru.shestakova.api.response.text.DeleteWorkResponse;
import ru.shestakova.api.response.text.EditWorkResponse;
import ru.shestakova.api.response.text.GetWorksResponse;
import ru.shestakova.api.service.TextWorkService;
import ru.shestakova.api.service.exception.PermissionException;
import ru.shestakova.model.BankText;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.BankTextRepository;
import ru.shestakova.repository.ServiceUserRepository;
import ru.shestakova.repository.TextWorkRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class TextWorkServiceImpl implements TextWorkService {

  private ServiceUserRepository userRepository;
  private BankTextRepository textRepository;
  private TextWorkRepository workRepository;

  @Override public CreateWorkResponse createWork(Long initiatorId, CreateWorkRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new CreateWorkResponse().setStatus(CreateWorkResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<BankText> textOptional = textRepository.findById(request.getTextId());
    if (textOptional.isPresent()) {
      return new CreateWorkResponse().setStatus(CreateWorkResponse.Status.TEXT_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    BankText text = textOptional.get();

    if (!userRole.isCanCreateWorks()) {
      throw new PermissionException();
    }

    String title = request.getTitle();
    String textStr = request.getText();
    WorkType workType = request.getType();

    if (
        workRepository.findByTextTextIdAndAuthorUserIdAndType(
            text.getTextId(), user.getUserId(), workType.getValue()
        ).isPresent()
    ) {
      return new CreateWorkResponse().setStatus(CreateWorkResponse.Status.WORK_ALREADY_EXISTS);
    }

    ru.shestakova.model.TextWork work = workRepository.save(
        new ru.shestakova.model.TextWork()
            .setWorkTitle(title)
            .setWorkText(textStr)
            .setRating(0)
            .setText(text)
            .setAuthor(user)
            .setType(workType.getValue())
    );

    return new CreateWorkResponse()
        .setStatus(CreateWorkResponse.Status.SUCCESS)
        .setWork(mapFrom(work));
  }

  @Override public Optional<TextWork> findWorkById(Long workId) {
    return workRepository.findById(workId).map(Mappers::mapFrom);
  }

  @Override public GetWorksResponse findWorksByFilter(TextWorkFilter filter) {
    List<TextWork> works = workRepository.findAllByFilter(mapFrom(filter))
                              .stream()
                              .map(Mappers::mapFrom)
                              .collect(Collectors.toList());
    return new GetWorksResponse()
        .setLength(works.size())
        .setWorks(works);
  }

  @Override
  public EditWorkResponse editWork(Long initiatorId, Long workId, EditWorkRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new EditWorkResponse().setStatus(EditWorkResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.TextWork> workOptional = workRepository.findById(workId);
    if (workOptional.isPresent()) {
      return new EditWorkResponse().setStatus(EditWorkResponse.Status.WORK_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.TextWork work = workOptional.get();

    if (!user.getUserId().equals(work.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(work.getAuthor().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanEditOthersWorks()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanEditHisWorks()) {
      throw new PermissionException();
    }

    if (request.getTitle() != null) {
      work.setWorkTitle(request.getTitle());
    }
    if (request.getText() != null) {
      work.setWorkText(request.getText());
    }
    if (request.getType() != null) {
      work.setType(request.getType().getValue());
    }

    return new EditWorkResponse()
        .setStatus(EditWorkResponse.Status.SUCCESS)
        .setWork(mapFrom(work));
  }

  @Override public DeleteWorkResponse deleteWork(Long initiatorId, Long workId) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (userOptional.isPresent()) {
      return new DeleteWorkResponse().setStatus(DeleteWorkResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.TextWork> workOptional = workRepository.findById(workId);
    if (workOptional.isPresent()) {
      return new DeleteWorkResponse().setStatus(DeleteWorkResponse.Status.WORK_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.TextWork work = workOptional.get();

    if (!user.getUserId().equals(work.getAuthor().getUserId())) {
      UserRole otherRole = UserRole.fromId(work.getAuthor().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanDeleteOthersWorks()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanDeleteHisWorks()) {
      throw new PermissionException();
    }

    workRepository.delete(work);

    return new DeleteWorkResponse()
        .setStatus(DeleteWorkResponse.Status.SUCCESS)
        .setWork(mapFrom(work));
  }
}
