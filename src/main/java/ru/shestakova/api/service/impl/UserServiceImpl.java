package ru.shestakova.api.service.impl;


import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.response.user.GetDetailedUserResponse;
import ru.shestakova.api.response.user.GetServiceUserResponse;
import ru.shestakova.api.service.UserService;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.ServiceUserRepository;

import java.util.Optional;

import static ru.shestakova.api.service.impl.Mappers.mapFrom;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

  private ServiceUserRepository userRepository;

  @Override
  public GetServiceUserResponse getServiceUser(Long userId) {
    Optional<ServiceUser> optional;
    optional = userRepository.findById(userId);
    if (optional.isPresent()) {
      return new GetServiceUserResponse().setStatus(GetServiceUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetServiceUserResponse()
          .setStatus(GetServiceUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()));
    }
  }

  @Override public GetServiceUserResponse getServiceUser(String username) {
    Optional<ServiceUser> optional = userRepository.findByUsername(username);
    if (optional.isPresent()) {
      return new GetServiceUserResponse().setStatus(GetServiceUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetServiceUserResponse()
          .setStatus(GetServiceUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()));
    }
  }

  @Override public GetDetailedUserResponse getDetailedUser(Long userId) {
    Optional<ServiceUser> optional = userRepository.findById(userId);
    if (optional.isPresent()) {
      return new GetDetailedUserResponse().setStatus(GetDetailedUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetDetailedUserResponse()
          .setStatus(GetDetailedUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()))
          .setDetails(mapFrom(optional.get().getDetails()));
    }
  }

  @Override public GetDetailedUserResponse getDetailedUser(String username) {
    Optional<ServiceUser> optional = userRepository.findByUsername(username);
    if (optional.isPresent()) {
      return new GetDetailedUserResponse().setStatus(GetDetailedUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetDetailedUserResponse()
          .setStatus(GetDetailedUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()))
          .setDetails(mapFrom(optional.get().getDetails()));
    }
  }
}
