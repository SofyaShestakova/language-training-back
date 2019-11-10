package ru.shestakova.api.model.statistics;

import java.util.List;
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
public class UsersWorksAmountStatistics {

  Integer length;
  List<WorksAmount> statistics;
  Long snapshotPeriod;

  @Data
  @Accessors(chain = true)
  @FieldDefaults(level = AccessLevel.PRIVATE)
  @NoArgsConstructor
  @AllArgsConstructor
  public static class WorksAmount {

    Integer amountOfWorks;
    Long snapshotDate;
  }
}
