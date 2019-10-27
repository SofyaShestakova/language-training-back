package ru.shestakova.api.service;

import ru.shestakova.api.request.RegistrationRequest;
import ru.shestakova.api.response.forum.RegistrationResponse;
import ru.shestakova.api.response.user.AuthenticationResponse;

import java.util.UUID;

public interface AuthenticationService {

  RegistrationResponse registrarUser(RegistrationRequest request);

  AuthenticationResponse authenticateUser(String username, String password);

  AuthenticationResponse authenticateUserByToken(String username, UUID token);
}
