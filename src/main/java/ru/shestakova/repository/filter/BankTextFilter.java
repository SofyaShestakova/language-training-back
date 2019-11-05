package ru.shestakova.repository.filter;

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
public class BankTextFilter {

  Integer from;
  Integer count;

  Long createdFrom;
  Long createdTo;

  Long editedFrom;
  Long editedTo;
}
