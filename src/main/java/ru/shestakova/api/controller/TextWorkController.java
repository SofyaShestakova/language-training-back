package ru.shestakova.api.controller;

import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.shestakova.api.model.text.TextWork;
import ru.shestakova.api.model.text.WorkType;
import ru.shestakova.api.request.text.CreateWorkRequest;
import ru.shestakova.api.request.text.EditWorkRequest;
import ru.shestakova.api.response.text.CreateWorkResponse;
import ru.shestakova.api.response.text.DeleteWorkResponse;
import ru.shestakova.api.response.text.EditWorkResponse;
import ru.shestakova.api.response.text.GetWorksResponse;
import ru.shestakova.api.service.TextWorkService;

@RestController
@RequestMapping(
    path = "/works",
    consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
    produces = MediaType.APPLICATION_JSON_UTF8_VALUE
)
@AllArgsConstructor
@CrossOrigin
public class TextWorkController {

  private TextWorkService workService;

  @PostMapping
  ResponseEntity<TextWork> createWork(
      @RequestAttribute("UserId") Long userId,
      @RequestBody CreateWorkRequest request
  ) {
    CreateWorkResponse response;
    response = workService.createWork(userId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getWork());
      case INITIATOR_NOT_FOUND:
      case TEXT_NOT_FOUND:
        return ResponseEntity.notFound().build();
      case WORK_ALREADY_EXISTS:
        return ResponseEntity.status(HttpStatus.CONFLICT).build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @GetMapping(path = "{workId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<TextWork> findWorkById(@PathVariable(name = "workId") Long workId) {
    return workService.findWorkById(workId)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @GetMapping
  ResponseEntity<GetWorksResponse> findWorksByFilter(
      Integer from,
      Integer count,
      Integer textId,
      Long authorId,
      List<WorkType> workTypes,
      Integer ratingFrom,
      Integer ratingTo,
      Instant createdFrom,
      Instant createdTo,
      Instant editedFrom,
      Instant editedTo
  ) {

    return ResponseEntity.badRequest().build();
  }

  @PatchMapping
  ResponseEntity<TextWork> editWork(
      @RequestAttribute("UserId") Long userId,
      @PathVariable(name = "workId") Long workId,
      @RequestBody EditWorkRequest request) {
    EditWorkResponse response = workService.editWork(userId, workId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getWork());
      case INITIATOR_NOT_FOUND:
      case WORK_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @DeleteMapping(path = "{workId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<TextWork> deleteWork(
      @RequestAttribute("UserId") Long userId,
      @PathVariable(name = "workId") Long workId
  ) {
    DeleteWorkResponse response = workService.deleteWork(userId, workId);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getWork());
      case INITIATOR_NOT_FOUND:
      case WORK_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
