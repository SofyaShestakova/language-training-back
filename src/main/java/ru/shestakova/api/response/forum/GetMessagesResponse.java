package ru.shestakova.api.response.forum;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.api.model.forum.ForumMessage;

import java.util.List;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class GetMessagesResponse {

  Integer length;
  List<ForumMessage> messages;
}
