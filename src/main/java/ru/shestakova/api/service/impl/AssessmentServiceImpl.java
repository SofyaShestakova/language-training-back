package ru.shestakova.api.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.shestakova.api.model.filter.AssessmentFilter;
import ru.shestakova.api.model.text.Assessment;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.text.CreateAssessmentRequest;
import ru.shestakova.api.request.text.EditAssessmentRequest;
import ru.shestakova.api.response.text.CreateAssessmentResponse;
import ru.shestakova.api.response.text.DeleteAssessmentResponse;
import ru.shestakova.api.response.text.EditAssessmentResponse;
import ru.shestakova.api.response.text.GetAssessmentsResponse;
import ru.shestakova.api.service.AssessmentService;
import ru.shestakova.api.service.exception.PermissionException;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.AssessmentRepository;
import ru.shestakova.repository.ServiceUserRepository;
import ru.shestakova.repository.TextWorkRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class AssessmentServiceImpl implements AssessmentService {

  private ServiceUserRepository userRepository;
  private TextWorkRepository workRepository;
  private AssessmentRepository assessmentRepository;

  @Override
  public CreateAssessmentResponse createAssessment(Long initiatorId,
      CreateAssessmentRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new CreateAssessmentResponse()
          .setStatus(CreateAssessmentResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<TextWork> workOptional = workRepository.findById(request.getWorkId());
    if (!workOptional.isPresent()) {
      return new CreateAssessmentResponse()
          .setStatus(CreateAssessmentResponse.Status.WORK_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    TextWork work = workOptional.get();

    if (!userRole.isCanCreateAssessments()) {
      throw new PermissionException();
    }

    if (assessmentRepository
        .findByWorkWorkIdAndExpertUserId(work.getWorkId(), user.getUserId())
        .isPresent()) {
      return new CreateAssessmentResponse()
          .setStatus(CreateAssessmentResponse.Status.ASSESSMENT_ALREADY_EXISTS);
    }

    ru.shestakova.model.Assessment assessment = assessmentRepository.save(
        new ru.shestakova.model.Assessment()
            .setComment(request.getComment())
            .setMarkRating(request.getMark().getValue())
            .setExpert(user)
            .setWork(work)
    );

    return new CreateAssessmentResponse()
        .setStatus(CreateAssessmentResponse.Status.SUCCESS)
        .setAssessment(mapFrom(assessment));
  }

  @Override public Optional<Assessment> findAssessmentById(Long assessmentId) {
    return assessmentRepository.findById(assessmentId).map(Mappers::mapFrom);
  }

  @Override public GetAssessmentsResponse findAssessmentsByFilter(AssessmentFilter filter) {
    List<Assessment> assessments = assessmentRepository.findAllByFilter(mapFrom(filter))
                                          .stream()
                                          .map(Mappers::mapFrom)
                                          .collect(Collectors.toList());
    return new GetAssessmentsResponse()
        .setLength(assessments.size())
        .setAssessments(assessments);
  }

  @Transactional
  @Override
  public EditAssessmentResponse editAssessment(Long initiatorId, Long assessmentId,
      EditAssessmentRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new EditAssessmentResponse()
          .setStatus(EditAssessmentResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.Assessment> assessmentOptional = assessmentRepository.findById(assessmentId);
    if (!assessmentOptional.isPresent()) {
      return new EditAssessmentResponse()
          .setStatus(EditAssessmentResponse.Status.ASSESSMENT_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.Assessment assessment = assessmentOptional.get();

    if (!user.getUserId().equals(assessment.getExpert().getUserId())) {
      UserRole otherRole = UserRole.fromId(assessment.getExpert().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanEditOthersAssessments()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanEditHisAssessments()) {
      throw new PermissionException();
    }

    if (request.getComment() != null) {
      assessment.setComment(request.getComment());
    }
    if (request.getMark() != null) {
      assessment.setMarkRating(request.getMark().getValue());
    }

    return new EditAssessmentResponse()
        .setStatus(EditAssessmentResponse.Status.SUCCESS)
        .setAssessment(mapFrom(assessment));
  }

  @Override public DeleteAssessmentResponse deleteAssessment(Long initiatorId, Long assessmentId) {
    Optional<ServiceUser> userOptional = userRepository.findById(initiatorId);
    if (!userOptional.isPresent()) {
      return new DeleteAssessmentResponse()
          .setStatus(DeleteAssessmentResponse.Status.INITIATOR_NOT_FOUND);
    }

    Optional<ru.shestakova.model.Assessment> assessmentOptional = assessmentRepository.findById(assessmentId);
    if (!assessmentOptional.isPresent()) {
      return new DeleteAssessmentResponse()
          .setStatus(DeleteAssessmentResponse.Status.ASSESSMENT_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    UserRole userRole = UserRole.fromId(user.getRole());
    ru.shestakova.model.Assessment assessment = assessmentOptional.get();

    if (!user.getUserId().equals(assessment.getExpert().getUserId())) {
      UserRole otherRole = UserRole.fromId(assessment.getExpert().getRole());
      if (userRole.compare(otherRole) <= 0 || !userRole.isCanDeleteOthersAssessments()) {
        throw new PermissionException();
      }
    } else if (!userRole.isCanDeleteHisAssessments()) {
      throw new PermissionException();
    }

    assessmentRepository.delete(assessment);

    return new DeleteAssessmentResponse()
        .setStatus(DeleteAssessmentResponse.Status.SUCCESS)
        .setAssessment(mapFrom(assessment));
  }
}
