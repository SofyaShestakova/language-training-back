package ru.shestakova.model.type;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum AssentMarkType {

  _0("0"),
  _1("1");

  private final String name;

  @Override
  public String toString() {
    return this.name;
  }
}
