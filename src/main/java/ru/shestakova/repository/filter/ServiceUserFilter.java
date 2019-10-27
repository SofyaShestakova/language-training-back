package ru.shestakova.repository.filter;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class ServiceUserFilter {

  private Integer fromRating = 0;
  private Integer toRating = Integer.MAX_VALUE;

  private Long registeredFrom;
  private Long registeredTo;
}
