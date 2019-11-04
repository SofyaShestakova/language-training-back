package ru.shestakova.api.controller;

import com.fasterxml.jackson.core.JsonParseException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.shestakova.api.service.exception.PermissionException;

@ControllerAdvice
@CrossOrigin
public class ServiceAdvice {

  @ExceptionHandler(PermissionException.class)
  public void handlePermissionException(
      HttpServletResponse response,
      PermissionException ex
  ) {
    response.setStatus(HttpStatus.UNAUTHORIZED.value());
  }

  @ExceptionHandler(JsonParseException.class)
  public void handleJsonParseException(
      HttpServletResponse response,
      PermissionException ex
  ) {
    response.setStatus(HttpStatus.BAD_REQUEST.value());
  }
}
