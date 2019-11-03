package ru.shestakova.api.service;

import ru.shestakova.api.model.user.UserDetails;
import ru.shestakova.api.response.user.DetailsPatchResponse;
import ru.shestakova.api.response.user.GetDetailedUserResponse;
import ru.shestakova.api.response.user.GetServiceUserResponse;

public interface UserService {

  GetServiceUserResponse getServiceUser(Long userId);

  GetServiceUserResponse getServiceUser(String username);

  GetDetailedUserResponse getDetailedUser(Long userId);

  GetDetailedUserResponse getDetailedUser(String username);

  DetailsPatchResponse patchUserDetails(String username, UserDetails details);
}
