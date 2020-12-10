package ru.shestakova.model.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TextWorkType {

  COMMENT("комментарий"),
  TRACT("трактовка"),
  ANALYSIS("анализ");

  private final String name;

  @Override
  public String toString() {
    return this.name;
  }
}
