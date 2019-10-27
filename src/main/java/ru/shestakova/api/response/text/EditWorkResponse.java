package ru.shestakova.api.response.text;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.api.model.text.TextWork;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class EditWorkResponse {

  Status status;
  TextWork work;

  public enum Status {
    SUCCESS,
    INITIATOR_NOT_FOUND,
    WORK_NOT_FOUND
  }
}
