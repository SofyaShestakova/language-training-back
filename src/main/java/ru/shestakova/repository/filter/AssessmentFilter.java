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
public class AssessmentFilter {

  Integer from = 0;
  Integer count = Integer.MAX_VALUE;

  Integer authorId;
  Integer workId;
  List<String> marks;

  Sort sort = Sort.NEWEST;

  public enum Sort {
    RATING_ASCENDING,
    RATING_DESCENDING,
    NEWEST,
    OLDEST
  }
}
