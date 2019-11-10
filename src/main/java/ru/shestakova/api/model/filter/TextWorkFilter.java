package ru.shestakova.api.model.filter;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.api.model.text.WorkType;

@Data
@Accessors(chain = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
public class TextWorkFilter {

  Integer from = 0;
  Integer count = 50;

  Integer textId;
  Long authorId;

  List<WorkType> workTypes = Arrays.asList(WorkType.values());

  Integer ratingFrom = 0;
  Integer ratingTo = Integer.MAX_VALUE;

  Long createdFrom = Instant.now().minus(Duration.ofDays(7)).toEpochMilli();
  Long createdTo = Instant.now().toEpochMilli();

  Long editedFrom;
  Long editedTo;

  Sort sort = Sort.NEWEST;

  public enum Sort {
    RATING_ASCENDING("RATING_ASCENDING"),
    RATING_DESCENDING("RATING_DESCENDING"),
    AUTHOR_ID("AUTHOR_ID"),
    NEWEST("NEWEST"),
    OLDEST("OLDEST");

    private String value;

    Sort(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    private static Map<String, Sort> fromValueToSort =
        Stream.of(Sort.values()).collect(Collectors.toMap(Sort::getValue, sort -> sort));

    @JsonCreator
    public static Sort fromValue(String value) {
      Sort sort = fromValueToSort.get(value);
      if(sort == null) {
        throw new IllegalArgumentException("Unknown sort type: " + value);
      } else {
        return sort;
      }
    }
  }
}
