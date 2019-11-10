package ru.shestakova.repository.filter;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Accessors(chain = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
public class ForumMessageFilter {

  Integer from = 0;
  Integer count = 50;

  Integer themeId;
  Long authorId;

  Long createdFrom;
  Long createdTo;

  Long editedFrom;
  Long editedTo;

  Long deletedFrom;
  Long deletedTo;

  List<Integer> terminationStatuses;
}
