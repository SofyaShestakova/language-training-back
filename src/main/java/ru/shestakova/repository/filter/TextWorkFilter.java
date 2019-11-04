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
public class TextWorkFilter {

  Integer from;
  Integer count;

  Integer textId;
  Long authorId;

  List<Integer> workTypes;

  Integer ratingFrom = 0;
  Integer ratingTo = Integer.MAX_VALUE;

  Long createdFrom;
  Long createdTo;

  Long editedFrom;
  Long editedTo;

  Sort sort;

  public enum Sort {
    RATING_ASCENDING,
    RATING_DESCENDING,
    AUTHOR_ID,
    NEWEST,
    OLDEST
  }
}
