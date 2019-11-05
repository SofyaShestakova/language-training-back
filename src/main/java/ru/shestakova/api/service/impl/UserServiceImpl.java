package ru.shestakova.api.service.impl;


import static ru.shestakova.api.service.impl.Mappers.mapFrom;

import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.request.EditUserRequest;
import ru.shestakova.api.response.user.EditUserResponse;
import ru.shestakova.api.response.user.GetDetailedUserResponse;
import ru.shestakova.api.response.user.GetServiceUserResponse;
import ru.shestakova.api.service.UserService;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.ServiceUserRepository;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

  private ServiceUserRepository userRepository;

  @Override
  public GetServiceUserResponse getServiceUser(Long userId) {
    Optional<ServiceUser> optional;
    optional = userRepository.findById(userId);
    if (!optional.isPresent()) {
      return new GetServiceUserResponse().setStatus(GetServiceUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetServiceUserResponse()
          .setStatus(GetServiceUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()));
    }
  }

  @Override
  public GetServiceUserResponse getServiceUser(String username) {
    Optional<ServiceUser> optional = userRepository.findByUsername(username);
    if (!optional.isPresent()) {
      return new GetServiceUserResponse().setStatus(GetServiceUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetServiceUserResponse()
          .setStatus(GetServiceUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()));
    }
  }

  @Override
  public GetDetailedUserResponse getDetailedUser(Long userId) {
    Optional<ServiceUser> optional = userRepository.findById(userId);
    if (!optional.isPresent()) {
      return new GetDetailedUserResponse().setStatus(GetDetailedUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetDetailedUserResponse()
          .setStatus(GetDetailedUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()))
          .setDetails(mapFrom(optional.get().getDetails()));
    }
  }

  @Override
  public GetDetailedUserResponse getDetailedUser(String username) {
    Optional<ServiceUser> optional = userRepository.findByUsername(username);
    if (!optional.isPresent()) {
      return new GetDetailedUserResponse().setStatus(GetDetailedUserResponse.Status.USER_NOT_FOUND);
    } else {
      return new GetDetailedUserResponse()
          .setStatus(GetDetailedUserResponse.Status.SUCCESS)
          .setUser(mapFrom(optional.get()))
          .setDetails(mapFrom(optional.get().getDetails()));
    }
  }

  @Override
  public EditUserResponse patchUserDetails(Long userId, EditUserRequest request) {
    Optional<ServiceUser> userOptional = userRepository.findById(userId);
    if (!userOptional.isPresent()) {
      return new EditUserResponse().setStatus(EditUserResponse.Status.USER_NOT_FOUND);
    }

    ServiceUser user = userOptional.get();
    ru.shestakova.model.UserDetails repositoryDetails = user.getDetails();
    ru.shestakova.model.UserDetails newUserDetails =
        new ru.shestakova.model.UserDetails()
            .setUserId(repositoryDetails.getUserId())
            .setUser(user)
            .setLevelCode(repositoryDetails.getLevelCode())
            .setRating(repositoryDetails.getRating())
            .setBio(request.getBio() != null ? request.getBio() : repositoryDetails.getBio())
            .setScreenName(request.getScreenName() != null ? request.getScreenName()
                : repositoryDetails.getScreenName());

    user.setDetails(newUserDetails);
    userRepository.save(user);

    return new EditUserResponse()
        .setStatus(EditUserResponse.Status.SUCCESS)
        .setDetails(mapFrom(newUserDetails));
  }


}
