package ru.shestakova.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.hibernate5.Hibernate5Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import java.util.Map;

public final class Merger {

  public static final ObjectMapper MAPPER;

  static {
    MAPPER = new ObjectMapper();

    MAPPER.registerModules(new JavaTimeModule());
    MAPPER.registerModules(new Hibernate5Module());
    MAPPER.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
  }

  public static <T> T merge(T from, T to) {
    if (from == null) {
      return to;
    } else if (to == null) {
      return from;
    } else {
      final Map fromMap = MAPPER.convertValue(from, Map.class);
      final Map toMap = MAPPER.convertValue(to, Map.class);

      toMap.putAll(fromMap);

      return (T) MAPPER.convertValue(toMap, to.getClass());
    }
  }
}
