package ru.shestakova.api.model.user;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;

@AllArgsConstructor @FieldDefaults(level = AccessLevel.PRIVATE)
public enum UserLevel {
  BEGINNER(0);

  int value;

  @JsonValue
  public int getValue() {
    return value;
  }

  private static Map<Integer, UserLevel> numericToValue =
      Stream.of(UserLevel.values()).collect(
          Collectors.toMap(
              UserLevel::getValue,
              level -> level
          )
      );

  @JsonCreator
  public static UserLevel fromNumeric(int value) {
    UserLevel level;
    level = numericToValue.get(value);
    if(level == null) {
      throw new IllegalArgumentException("Unknown code: " + value);
    } else {
      return level;
    }
  }
}
