package ru.shestakova.repository.filter;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.time.LocalDate;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Data
@Accessors(chain = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class BankTextFilter {

  Integer from = 0;
  Integer count = Integer.MAX_VALUE;

  LocalDate createdFrom;
  LocalDate createdTo;
}
