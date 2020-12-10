package ru.shestakova.api.controller;

import com.fasterxml.jackson.core.JsonParseException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@CrossOrigin
public class ServiceAdvice {

  @ExceptionHandler(JsonParseException.class)
  public void handleJsonParseException(
      HttpServletResponse response
  ) {
    response.setStatus(HttpStatus.BAD_REQUEST.value());
  }
}
