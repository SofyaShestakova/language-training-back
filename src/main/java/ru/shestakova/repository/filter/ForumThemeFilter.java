package ru.shestakova.repository.filter;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class ForumThemeFilter {

  Integer from = 0;
  Integer count = 50;

  Long authorId;

  Long createdFrom;
  Long createdTo;

  Long editedFrom;
  Long editedTo;

  Long lastMessageFrom;
  Long lastMessageTo;

  Integer totalMessagesFrom;
  Integer totalMessagesTo;

  List<Integer> terminationStatuses;
}
