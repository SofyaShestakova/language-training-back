package ru.shestakova.repository.filter;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@JsonInclude(Include.NON_NULL)
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class TextWorkFilter {

  Integer from = 0;
  Integer count = Integer.MAX_VALUE;

  Integer textId;
  Integer authorId;

  Integer ratingFrom;
  Integer ratingTo;

  Sort sort = Sort.NEWEST;

  public enum Sort {
    RATING_ASCENDING,
    RATING_DESCENDING,
    AUTHOR_ID,
    NEWEST,
    OLDEST
  }
}
