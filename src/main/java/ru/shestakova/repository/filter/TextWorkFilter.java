package ru.shestakova.repository.filter;

import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class TextWorkFilter {

  Integer from = 0;
  Integer count = 50;

  Integer textId;
  Long authorId;

  Integer ratingFrom = 0;
  Integer ratingTo = Integer.MAX_VALUE;

  LocalDate createdFrom;
  LocalDate createdTo;

  Sort sort = Sort.NEWEST;

  public enum Sort {
    RATING_ASCENDING,
    RATING_DESCENDING,
    AUTHOR_ID,
    NEWEST,
    OLDEST
  }
}
