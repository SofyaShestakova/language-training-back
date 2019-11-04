package ru.shestakova.api.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.shestakova.api.model.filter.AssessmentFilter;
import ru.shestakova.api.model.text.Assessment;
import ru.shestakova.api.request.text.CreateAssessmentRequest;
import ru.shestakova.api.request.text.EditAssessmentRequest;
import ru.shestakova.api.response.text.CreateAssessmentResponse;
import ru.shestakova.api.response.text.DeleteAssessmentResponse;
import ru.shestakova.api.response.text.EditAssessmentResponse;
import ru.shestakova.api.response.text.GetAssessmentsResponse;
import ru.shestakova.api.service.AssessmentService;

@RestController
@RequestMapping(
    path = "/assessments",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE
)
@AllArgsConstructor
public class AssessmentController {

  private AssessmentService assessmentService;

  @PostMapping
  ResponseEntity<Assessment> createAssessment(
      @RequestAttribute("UserId") Long userId,
      @RequestBody CreateAssessmentRequest request
  ) {
    CreateAssessmentResponse response = assessmentService.createAssessment(userId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getAssessment());
      case INITIATOR_NOT_FOUND:
      case WORK_NOT_FOUND:
        return ResponseEntity.notFound().build();
      case ASSESSMENT_ALREADY_EXISTS:
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @GetMapping(path = "{assessmentId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<Assessment> findAssessmentById(@PathVariable("assessmentId") Long assessmentId) {
    return assessmentService.findAssessmentById(assessmentId)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @GetMapping(consumes = MediaType.ALL_VALUE)
  ResponseEntity<GetAssessmentsResponse> findAssessmentsByFilter(
      @RequestBody AssessmentFilter filter
  ) {
    GetAssessmentsResponse response = assessmentService.findAssessmentsByFilter(filter);
    if (response.getLength() == 0) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.ok(response);
    }
  }

  @PatchMapping(path = "{assessmentId}")
  ResponseEntity<Assessment> editAssessment(
      @RequestAttribute("UserId") Long userId,
      @PathVariable("assessmentId") Long assessmentId,
      @RequestBody EditAssessmentRequest request) {
    EditAssessmentResponse response = assessmentService
        .editAssessment(userId, assessmentId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getAssessment());
      case INITIATOR_NOT_FOUND:
      case ASSESSMENT_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @DeleteMapping(path = "{assessmentId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<Assessment> deleteAssessment(
      @RequestAttribute("UserId") Long userId,
      @PathVariable("assessmentId") Long assessmentId
  ) {
    DeleteAssessmentResponse response = assessmentService.deleteAssessment(userId, assessmentId);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getAssessment());
      case INITIATOR_NOT_FOUND:
      case ASSESSMENT_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
