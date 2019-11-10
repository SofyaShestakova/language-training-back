package ru.shestakova.api.controller;

import java.time.Duration;
import java.time.Instant;
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
import ru.shestakova.api.service.StatisticsService;

@RestController
@RequestMapping(
    path = "/statistics",
    produces = MediaType.APPLICATION_JSON_VALUE
)
@AllArgsConstructor
@CrossOrigin
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
}
