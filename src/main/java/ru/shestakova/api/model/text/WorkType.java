package ru.shestakova.api.model.text;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public enum WorkType {
  ANALYSIS(0),
  TRANSLATION(1),
  COMMENT(2),
  RETELLING(3);

  private int value;

  WorkType(int value) {
    this.value = value;
  }

  @JsonValue
  public int getValue() {
    return value;
  }

  private static Map<Integer, WorkType> codeToWorkType =
      Stream.of(WorkType.values()).collect(Collectors.toMap(
          WorkType::getValue,
          type -> type
      ));

  @JsonCreator
  public static WorkType fromNumeric(int value) {
    WorkType type = codeToWorkType.get(value);
    if(type == null) {
      throw new IllegalArgumentException("Unknown code: " + value);
    } else {
      return type;
    }
  }
}
