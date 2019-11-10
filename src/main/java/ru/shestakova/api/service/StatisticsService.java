package ru.shestakova.api.service;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics;
import ru.shestakova.api.model.statistics.UsersWorksAmountStatistics;
import ru.shestakova.api.model.statistics.WorkTypesPopularityStatistics;
import ru.shestakova.api.model.text.WorkType;

public interface StatisticsService {

  AverageUserRatingStatistics getAverageUserRatingStatistics(
      String username, Instant dateFrom, Duration snapshotPeriod, int snapshotsAmount);

  UsersWorksAmountStatistics getUsersWorksAmountStatistics(
      String username, Instant dateFrom, Duration snapshotPeriod, int snapshotsAmount);

  WorkTypesPopularityStatistics getWorkTypesPopularityStatistics(
      List<WorkType> workTypes, Instant dateFrom, Duration snapshotPeriod, int snapshotsAmount);
}
