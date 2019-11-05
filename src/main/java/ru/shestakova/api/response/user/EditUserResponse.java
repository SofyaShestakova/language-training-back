package ru.shestakova.api.response.user;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.api.model.user.UserDetails;

@Data
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
public class EditUserResponse {

  Status status;
  UserDetails details;

  public EditUserResponse(Status status) {
    this.status = status;
  }

  public enum  Status {
    SUCCESS,
    USER_NOT_FOUND;

    public boolean isSuccess() {
      return this == SUCCESS;
    }
  }
}
