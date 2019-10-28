package ru.shestakova.api.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.shestakova.api.service.exception.PermissionException;

import javax.servlet.http.HttpServletResponse;

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
}
