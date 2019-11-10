package ru.shestakova.api.service.impl;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics.AverageRating;
import ru.shestakova.api.model.statistics.UsersWorksAmountStatistics;
import ru.shestakova.api.model.statistics.WorkTypesPopularityStatistics;
import ru.shestakova.api.model.text.WorkType;
import ru.shestakova.api.service.StatisticsService;
import ru.shestakova.model.Assessment;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.AssessmentRepository;
import ru.shestakova.repository.ServiceUserRepository;
import ru.shestakova.repository.TextWorkRepository;
import ru.shestakova.repository.filter.AssessmentFilter;
import ru.shestakova.repository.filter.AssessmentFilter.Sort;
import ru.shestakova.repository.filter.TextWorkFilter;

@Service
@AllArgsConstructor
public class StatisticsServiceImpl implements StatisticsService {

  private ServiceUserRepository userRepository;
  private AssessmentRepository assessmentRepository;
  private TextWorkRepository workRepository;

  @Override
  public AverageUserRatingStatistics getAverageUserRatingStatistics(String username,
      Instant dateFrom,
      Duration snapshotPeriod, int snapshotsAmount) {
    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return null;
    }
    Long userId = userOptional.get().getUserId();

    Instant dateTo = dateFrom.plusMillis(snapshotPeriod.toMillis() * snapshotsAmount);

    List<TextWork> allUsersWorks = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setAuthorId(userId));

    List<Assessment> analyzedAssessment = allUsersWorks.stream()
        .map(work -> assessmentRepository.findAllByFilter(
            new AssessmentFilter()
                .setFrom(0)
                .setCount(Integer.MAX_VALUE)
                .setWorkId(work.getWorkId())
                .setCreatedFrom(dateFrom.toEpochMilli())
                .setCreatedTo(dateTo.toEpochMilli())
                .setSort(Sort.OLDEST)))
        .reduce(new ArrayList<>(), (list1, list2) -> {
          ArrayList<Assessment> list = new ArrayList<>(list1.size() + list2.size());
          list.addAll(list1);
          list.addAll(list2);
          return list;
        });

    if (analyzedAssessment.size() == 0) {
      return null;
    }

    List<Integer> marksBefore = allUsersWorks.stream()
        .map(work -> assessmentRepository.findAllByFilter(new AssessmentFilter()
            .setFrom(0)
            .setCount(Integer.MAX_VALUE)
            .setWorkId(work.getWorkId())
            .setCreatedTo(dateFrom.toEpochMilli() - 1)
            .setSort(Sort.OLDEST)))
        .flatMapToInt(list -> list.stream().mapToInt(Assessment::getMarkRating))
        .boxed()
        .collect(Collectors.toList());
    int marksAmountBefore = marksBefore.size();
    double markBefore = marksBefore.stream().reduce(0, Integer::sum);

    List<AverageRating> statistics = new ArrayList<>(snapshotsAmount);
    AtomicLong prevUntilDate = new AtomicLong(dateFrom.toEpochMilli());
    for (AtomicLong untilDate = new AtomicLong(prevUntilDate.get() + snapshotPeriod.toMillis());
        untilDate.get() <= dateTo.toEpochMilli();
        prevUntilDate.set(untilDate.get()), untilDate.addAndGet(snapshotPeriod.toMillis())) {

      List<Assessment> periodAssessments = analyzedAssessment.stream().filter(assessment ->
          assessment.getCreateDate() >= prevUntilDate.get()
              && assessment.getCreateDate() < untilDate.get())
          .collect(Collectors.toList());

      marksAmountBefore += periodAssessments.size();
      markBefore += periodAssessments.stream().mapToInt(Assessment::getMarkRating).sum();
      statistics.add(new AverageRating()
          .setRating(marksAmountBefore != 0 ? markBefore / marksAmountBefore : 0)
          .setSnapshotDate(untilDate.get()));
      if(statistics.size() == snapshotsAmount) {
        break;
      }
    }

    return new AverageUserRatingStatistics()
        .setLength(statistics.size())
        .setStatistics(statistics);
  }

  @Override
  public UsersWorksAmountStatistics getUsersWorksAmountStatistics(String username, Instant dateFrom,
      Duration snapshotPeriod, int snapshotsAmount) {
    return null;
  }

  @Override
  public WorkTypesPopularityStatistics getWorkTypesPopularityStatistics(List<WorkType> workTypes,
      Instant dateFrom, Duration snapshotPeriod, int snapshotsAmount) {
    return null;
  }
}
