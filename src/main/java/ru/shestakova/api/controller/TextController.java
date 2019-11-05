package ru.shestakova.api.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.shestakova.api.model.filter.BankTextFilter;
import ru.shestakova.api.model.text.BankText;
import ru.shestakova.api.request.text.CreateTextRequest;
import ru.shestakova.api.request.text.EditTextRequest;
import ru.shestakova.api.response.text.CreateTextResponse;
import ru.shestakova.api.response.text.DeleteTextResponse;
import ru.shestakova.api.response.text.EditTextResponse;
import ru.shestakova.api.response.text.GetTextsResponse;
import ru.shestakova.api.service.TextService;

@RestController
@RequestMapping(
    path = "/texts",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE
)
@AllArgsConstructor
@CrossOrigin
public class TextController {

  private TextService textService;

  @PostMapping
  ResponseEntity<BankText> createText(
      @RequestAttribute("UserId") Long userId,
      @RequestBody CreateTextRequest request
  ) {
    CreateTextResponse response = textService.createText(userId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getText());
      case INITIATOR_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @GetMapping(path = "{textId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<BankText> findTextById(@PathVariable(name = "textId") Integer textId) {
    return textService.findTextById(textId)
                      .map(ResponseEntity::ok)
                      .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping(path = "/filter", consumes = MediaType.APPLICATION_JSON_VALUE)
  ResponseEntity<GetTextsResponse> findTextsByFilter(@RequestBody BankTextFilter filter) {
    GetTextsResponse response = textService.findTextsByFilter(filter);
    if(response.getLength() == 0) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.ok(response);
    }
  }

  @PatchMapping(path = "{textId}")
  ResponseEntity<BankText> editText(
      @RequestAttribute("UserId") Long userId,
      @PathVariable(name = "textId") Integer textId,
      @RequestBody EditTextRequest request
  ) {
    EditTextResponse response = textService.editText(userId, textId, request);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getText());
      case INITIATOR_NOT_FOUND:
      case TEXT_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @DeleteMapping(path = "{textId}", consumes = MediaType.ALL_VALUE)
  ResponseEntity<BankText> deleteText(
      @RequestAttribute("UserId") Long userId,
      @PathVariable(name = "textId") Integer textId
  ) {
    DeleteTextResponse response = textService.deleteText(userId, textId);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response.getText());
      case INITIATOR_NOT_FOUND:
      case TEXT_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
