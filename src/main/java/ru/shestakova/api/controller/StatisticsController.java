package ru.shestakova.api.controller;

import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics;
import ru.shestakova.api.model.statistics.UsersWorksAmountStatistics;
import ru.shestakova.api.model.statistics.WorkTypesPopularityStatistics;
import ru.shestakova.api.model.text.WorkType;
import ru.shestakova.api.service.StatisticsService;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/statistics",
    produces = MediaType.APPLICATION_JSON_VALUE
)
@AllArgsConstructor
public class StatisticsController {

  private StatisticsService statisticsService;

  @GetMapping(path = "average-rating/{username}")
  ResponseEntity<AverageUserRatingStatistics> getAverageUserRatingStatistics(
      @PathVariable String username,
      @RequestParam Long dateFrom,
      @RequestParam Long snapshotPeriod,
      @RequestParam int snapshotsAmount
  ) {
    AverageUserRatingStatistics statistics = statisticsService
        .getAverageUserRatingStatistics(username, Instant.ofEpochMilli(dateFrom),
            Duration.ofMillis(snapshotPeriod), snapshotsAmount);

    if (statistics == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(statistics);
    }
  }

  @GetMapping(path = "works-amount/{username}")
  ResponseEntity<UsersWorksAmountStatistics> getUsersWorksAmountStatistics(
      @PathVariable String username,
      @RequestParam Long dateFrom,
      @RequestParam Long snapshotPeriod,
      @RequestParam int snapshotsAmount
  ) {
    UsersWorksAmountStatistics statistics = statisticsService
        .getUsersWorksAmountStatistics(username, Instant.ofEpochMilli(dateFrom),
            Duration.ofMillis(snapshotPeriod), snapshotsAmount);
    if (statistics == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(statistics);
    }
  }

  @GetMapping(path = "work-types-popularity")
  ResponseEntity<WorkTypesPopularityStatistics> getWorkTypesPopularityStatistics(
      @RequestParam(name = "workTypes") String workTypesStr,
      @RequestParam Long dateFrom,
      @RequestParam Long snapshotPeriod,
      @RequestParam int snapshotsAmount
  ) {
    List<WorkType> types = Stream.of(workTypesStr.split(","))
        .map(Integer::parseInt)
        .map(WorkType::fromNumeric)
        .collect(Collectors.toList());

    WorkTypesPopularityStatistics statistics = statisticsService
        .getWorkTypesPopularityStatistics(types, Instant.ofEpochMilli(dateFrom),
            Duration.ofMillis(snapshotPeriod), snapshotsAmount);
    if (statistics == null) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(statistics);
    }
  }
}
