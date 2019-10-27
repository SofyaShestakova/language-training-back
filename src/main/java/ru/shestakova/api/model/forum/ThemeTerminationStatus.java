package ru.shestakova.api.model.forum;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.FieldDefaults;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@FieldDefaults(level = AccessLevel.PRIVATE) @AllArgsConstructor
public enum ThemeTerminationStatus {
  OPENED(0),
  CLOSED(1),
  ARCHIVED(2),
  DELETED(3);

  @Getter
  final int value;

  private static Map<Integer, ThemeTerminationStatus> numericToStatus = Stream
      .of(ThemeTerminationStatus.values())
      .collect(
          Collectors.toMap(
              ThemeTerminationStatus::getValue,
              terminationStatus -> terminationStatus
          )
      );

  public static boolean isValid(int value) {
    return numericToStatus.containsKey(value);
  }

  public static ThemeTerminationStatus fromNumeric(int value) {
    var status = numericToStatus.get(value);
    if (status == null) {
      throw new IllegalArgumentException("Unknown termination status: " + value);
    } else {
      return status;
    }
  }
}
