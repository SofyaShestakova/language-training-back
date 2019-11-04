package ru.shestakova.api.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shestakova.api.model.filter.TextWorkFilter;
import ru.shestakova.api.model.text.TextWork;
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
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE
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
  ResponseEntity<GetWorksResponse> findWorksByFilter(@RequestBody TextWorkFilter filter) {
    GetWorksResponse response = workService.findWorksByFilter(filter);
    if (response.getLength() == 0) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.ok(response);
    }
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
