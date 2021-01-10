package ru.shestakova.model.type;

import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.Arrays;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TextWorkType {

  @JsonProperty("комментарий")
  комментарий("комментарий"),

  @JsonProperty("трактовка")
  трактовка("трактовка"),

  @JsonProperty("анализ")
  анализ("анализ");

  private final String name;

  public static TextWorkType fromString(String value) {
    //noinspection OptionalGetWithoutIsPresent
    return Arrays.stream(values())
        .filter(it -> it.getName().equals(value))
        .findFirst()
        .get();
  }
}
