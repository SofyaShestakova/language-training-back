package ru.shestakova.api.model.statistics;

import java.util.List;
import java.util.Map;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.api.model.text.WorkType;

@Data
@Accessors(chain = true)
@FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
public class WorkTypesPopularityStatistics {

  Integer length;
  Map<WorkType, List<WorkTypePopularity>> statistics;

  @Data
  @Accessors(chain = true)
  @FieldDefaults(level = AccessLevel.PRIVATE)
  @NoArgsConstructor
  @AllArgsConstructor
  public static class WorkTypePopularity {

    Integer worksWritten;
    Long snapshotDate;
  }
}
