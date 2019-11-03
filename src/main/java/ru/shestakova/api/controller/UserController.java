package ru.shestakova.api.controller;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shestakova.api.model.user.UserDetails;
import ru.shestakova.api.response.user.GetDetailedUserResponse;
import ru.shestakova.api.response.user.DetailsPatchResponse;
import ru.shestakova.api.service.UserService;

@RestController
@RequestMapping(
    path = "/users",
    consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
    produces = MediaType.APPLICATION_JSON_UTF8_VALUE
)
@AllArgsConstructor
@CrossOrigin
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping(path = "{username}/details")
  public ResponseEntity<GetDetailedUserResponse> getUser(
      @PathVariable(name = "username") String username
  ) {
    GetDetailedUserResponse response = userService.getDetailedUser(username);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response);
      case USER_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @PatchMapping(path = "{username}")
  public ResponseEntity<DetailsPatchResponse> editUser(
      @PathVariable(name = "username") String username,
      @RequestBody UserDetails details
  ) {

    DetailsPatchResponse response = userService.patchUserDetails(username, details);
    switch (response.getStatus()) {
      case SUCCESS:
        return ResponseEntity.ok(response);
      case USER_NOT_FOUND:
        return ResponseEntity.notFound().build();
      default:
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }


}
