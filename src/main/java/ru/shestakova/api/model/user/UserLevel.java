package ru.shestakova.api.model.user;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@AllArgsConstructor @FieldDefaults(level = AccessLevel.PRIVATE)
public enum UserLevel {
  BEGINNER(0);

  int value;

  private static Map<Integer, UserLevel> numericToValue =
      Stream.of(UserLevel.values()).collect(
          Collectors.toMap(
              UserLevel::getValue,
              level -> level
          )
      );

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
