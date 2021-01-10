/*
package ru.shestakova.model.type;

import java.util.Arrays;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class TextWorkTypeConverter implements AttributeConverter<TextWorkType, String> {

  @Override
  public String convertToDatabaseColumn(TextWorkType attribute) {
    return attribute.getName();
  }

  @Override
  public TextWorkType convertToEntityAttribute(String dbData) {
    return Arrays.stream(TextWorkType.values())
        .filter(it -> it.getName().equals(dbData))
        .findFirst()
        .get();
  }
}
*/
