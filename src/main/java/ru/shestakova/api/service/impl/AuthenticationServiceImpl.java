package ru.shestakova.api.service.impl;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.shestakova.api.configuration.RegistrationProperties;
import ru.shestakova.api.model.user.UserLevel;
import ru.shestakova.api.model.user.UserRole;
import ru.shestakova.api.request.RegistrationRequest;
import ru.shestakova.api.response.forum.RegistrationResponse;
import ru.shestakova.api.response.forum.RegistrationResponse.Status;
import ru.shestakova.api.response.user.AuthenticationResponse;
import ru.shestakova.api.service.AuthenticationService;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.model.UserDetails;
import ru.shestakova.repository.ServiceUserRepository;

import java.util.Optional;
import java.util.UUID;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

  private RegistrationProperties properties;

  private ServiceUserRepository userRepository;

  @Transactional
  @Override
  public RegistrationResponse registrarUser(RegistrationRequest request) {
    String username = request.getUsername();
    String password = request.getPassword();

    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return new RegistrationResponse().setStatus(Status.USERNAME_ALREADY_EXISTS);
    }

    ServiceUser user = userRepository.save(
        new ServiceUser()
            .setUsername(username)
            .setPassword(password)
            .setAvatarUrl(properties.getDefaultAvatarUrl())
            .setRole(UserRole.USER.getRoleId())
    );

    UserDetails details = new UserDetails()
        .setUserId(user.getUserId())
        .setScreenName(properties.getDefaultScreenName())
        .setLevelCode(UserLevel.BEGINNER.getValue())
        .setRating(0)
        .setUser(user);
    user.setDetails(details);

    return new RegistrationResponse()
        .setStatus(Status.SUCCESS)
        .setUser(mapFrom(user))
        .setDetails(mapFrom(user.getDetails()));
  }

  @Transactional
  @Override
  public AuthenticationResponse authenticateUser(String username, String password) {
    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return new AuthenticationResponse().setStatus(AuthenticationResponse.Status.USER_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    if (!user.getPassword().equals(password)) {
      return new AuthenticationResponse()
          .setStatus(AuthenticationResponse.Status.WRONG_CREDENTIALS);
    }

    UUID token;
    if (user.getAuthToken() != null) {
      token = user.getAuthToken();
    } else {
//      token = TimeBasedUuidGenerator.generate(); TODO
      token = UUID.fromString("e1e71142-f2e5-11e9-a902-04d3b0aac206");
      user.setAuthToken(token);
    }

    return new AuthenticationResponse()
        .setStatus(AuthenticationResponse.Status.SUCCESS)
        .setToken(token)
        .setUserId(user.getUserId());
  }

  @Transactional
  @Override
  public AuthenticationResponse authenticateUserByToken(String username, UUID token) {
    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return new AuthenticationResponse().setStatus(AuthenticationResponse.Status.USER_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    if (!user.getAuthToken().equals(token)) {
      return new AuthenticationResponse()
          .setStatus(AuthenticationResponse.Status.WRONG_CREDENTIALS);
    }

    return new AuthenticationResponse()
        .setStatus(AuthenticationResponse.Status.SUCCESS)
        .setToken(token)
        .setUserId(user.getUserId());
  }
}
