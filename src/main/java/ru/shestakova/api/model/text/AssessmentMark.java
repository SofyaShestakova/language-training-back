package ru.shestakova.api.model.text;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;


public enum AssessmentMark {
  EXCELLENT(5),
  GOOD(4),
  SUFFICIENT(3),
  INSUFFICIENT(2),
  POOR(1);

  private int value;

  AssessmentMark(int value) {
    this.value = value;
  }

  @JsonValue
  public int getValue() {
    return value;
  }

  private static Map<Integer, AssessmentMark> valueToMark =
      Stream.of(AssessmentMark.values()).collect(Collectors.toMap(
          AssessmentMark::getValue,
          mark -> mark)
      );

  @JsonCreator
  public static AssessmentMark fromNumeric(int value) {
    if (!valueToMark.containsKey(value)) {
      throw new IllegalArgumentException("Unknown mark numeric: " + value);
    } else {
      return valueToMark.get(value);
    }
  }
}
