package ru.shestakova.repository.filter;

import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class ForumThemeFilter {

  Integer from = 0;
  Integer count = 50;

  LocalDate createdFrom;
  LocalDate createdTo;
}
