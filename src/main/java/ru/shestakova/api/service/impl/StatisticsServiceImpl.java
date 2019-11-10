package ru.shestakova.api.service.impl;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics;
import ru.shestakova.api.model.statistics.AverageUserRatingStatistics.AverageRating;
import ru.shestakova.api.model.statistics.UsersWorksAmountStatistics;
import ru.shestakova.api.model.statistics.UsersWorksAmountStatistics.WorksAmount;
import ru.shestakova.api.model.statistics.WorkTypesPopularityStatistics;
import ru.shestakova.api.model.statistics.WorkTypesPopularityStatistics.WorkTypePopularity;
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
    Objects.requireNonNull(username);

    long now = Instant.now().toEpochMilli();
    /*if (dateFrom.toEpochMilli() + (snapshotsAmount - 1) * snapshotPeriod.toMillis()
        > now + snapshotPeriod.toMillis()) {
      throw new IllegalArgumentException();
    }*/

    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return null;
    }
    ServiceUser user = userOptional.get();

    Instant dateTo = Instant.ofEpochMilli(dateFrom.toEpochMilli()
        + snapshotPeriod.toMillis() * (snapshotsAmount - 1));

    List<TextWork> allUsersWorks = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setAuthorId(user.getUserId()));

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
    statistics.add(new AverageRating()
        .setRating(marksAmountBefore != 0 ? markBefore / marksAmountBefore : 0)
        .setSnapshotDate(dateFrom.toEpochMilli()));

    AtomicLong prevUntilDate = new AtomicLong(dateFrom.toEpochMilli());
    for (AtomicLong untilDate = new AtomicLong(prevUntilDate.get() + snapshotPeriod.toMillis());
        untilDate.get() <= dateTo.toEpochMilli()
            && untilDate.get() <= now + snapshotPeriod.toMillis();
        prevUntilDate.set(untilDate.get()), untilDate.addAndGet(snapshotPeriod.toMillis())) {
      if (untilDate.get() > now) {
        untilDate.set(now);
      }
      List<Assessment> periodAssessments = analyzedAssessment.stream().filter(assessment ->
          assessment.getCreateDate() >= prevUntilDate.get()
              && assessment.getCreateDate() < untilDate.get())
          .collect(Collectors.toList());

      marksAmountBefore += periodAssessments.size();
      markBefore += periodAssessments.stream().mapToInt(Assessment::getMarkRating).sum();
      statistics.add(new AverageRating()
          .setRating(marksAmountBefore != 0 ? markBefore / marksAmountBefore : 0)
          .setSnapshotDate(untilDate.get()));
      if (statistics.size() == snapshotsAmount || untilDate.get() > now) {
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
    Objects.requireNonNull(username);

    long now = Instant.now().toEpochMilli();
    /*if (dateFrom.toEpochMilli() + (snapshotsAmount - 1) * snapshotPeriod.toMillis()
        > now + snapshotPeriod.toMillis()) {
      throw new IllegalArgumentException();
    }*/

    Optional<ServiceUser> userOptional = userRepository.findByUsername(username);
    if (!userOptional.isPresent()) {
      return null;
    }
    ServiceUser user = userOptional.get();

    Instant dateTo = Instant.ofEpochMilli(dateFrom.toEpochMilli()
        + snapshotPeriod.toMillis() * (snapshotsAmount - 1));

    List<TextWork> analyzedWorks = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setAuthorId(user.getUserId())
        .setCreatedFrom(dateFrom.toEpochMilli())
        .setSort(TextWorkFilter.Sort.OLDEST));
    if (analyzedWorks.size() == 0) {
      return null;
    }

    int worksBefore = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setAuthorId(user.getUserId())
        .setCreatedTo(dateFrom.toEpochMilli() - 1)
        .setSort(TextWorkFilter.Sort.OLDEST))
        .size();

    List<WorksAmount> statistics = new ArrayList<>(snapshotsAmount);
    statistics.add(new WorksAmount(worksBefore, dateFrom.toEpochMilli()));

    AtomicLong prevUntilDate = new AtomicLong(dateFrom.toEpochMilli());
    for (AtomicLong untilDate = new AtomicLong(dateFrom.toEpochMilli() + snapshotPeriod.toMillis());
        untilDate.get() <= dateTo.toEpochMilli()
            && untilDate.get() <= now + snapshotPeriod.toMillis();
        prevUntilDate.set(untilDate.get()), untilDate
            .set(untilDate.get() + snapshotPeriod.toMillis())
    ) {
      List<TextWork> periodWorks = analyzedWorks.stream().filter(work ->
          work.getCreateDate() >= prevUntilDate.get() && work.getCreateDate() < untilDate.get())
          .collect(Collectors.toList());
      statistics.add(new WorksAmount((worksBefore += periodWorks.size()), untilDate.get()));

      if (statistics.size() == snapshotsAmount || untilDate.get() > now) {
        break;
      }
    }

    return new UsersWorksAmountStatistics()
        .setLength(statistics.size())
        .setStatistics(statistics);
  }

  @Override
  public WorkTypesPopularityStatistics getWorkTypesPopularityStatistics
      (List<WorkType> workTypes,
          Instant dateFrom, Duration snapshotPeriod, int snapshotsAmount) {
    Objects.requireNonNull(workTypes);
    if (workTypes.size() == 0) {
      throw new IllegalArgumentException();
    }

    long now = Instant.now().toEpochMilli();
    /*if (dateFrom.toEpochMilli() + (snapshotsAmount - 1) * snapshotPeriod.toMillis()
        > now + snapshotPeriod.toMillis()) {
      throw new IllegalArgumentException();
    }*/

    Instant dateTo = Instant.ofEpochMilli(dateFrom.toEpochMilli()
        + snapshotPeriod.toMillis() * (snapshotsAmount - 1));

    List<TextWork> analyzedWorks = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setCreatedFrom(dateFrom.toEpochMilli())
        .setCreatedTo(dateTo.toEpochMilli())
        .setSort(TextWorkFilter.Sort.OLDEST)
    );
    if (analyzedWorks.size() == 0) {
      return null;
    }

    Map<WorkType, Integer> worksAmountBefore = new HashMap<>();
    List<TextWork> worksBefore = workRepository.findAllByFilter(new TextWorkFilter()
        .setFrom(0)
        .setCount(Integer.MAX_VALUE)
        .setCreatedTo(dateFrom.toEpochMilli() - 1)
        .setWorkTypes(workTypes.stream().map(WorkType::getValue).collect(Collectors.toList())));
    for (WorkType type : WorkType.values()) {
      worksAmountBefore.put(type, 0);
    }
    for (TextWork work : worksBefore) {
      WorkType workType = WorkType.fromNumeric(work.getType());
      worksAmountBefore.put(workType, worksAmountBefore.get(workType) + 1);
    }

    Map<WorkType, List<WorkTypePopularity>> statistics = workTypes.stream()
        .collect(Collectors.toMap(
            type -> type,
            type -> new ArrayList<WorkTypePopularity>(snapshotsAmount) {{
              add(new WorkTypePopularity(worksAmountBefore.get(type), dateFrom.toEpochMilli()));
            }}
        ));

    for (WorkType analyzedType : workTypes) {
      List<TextWork> works = analyzedWorks.stream()
          .filter(work -> work.getType() == analyzedType.getValue())
          .collect(Collectors.toList());

      AtomicLong prevUntilDate = new AtomicLong(dateFrom.toEpochMilli());
      for (AtomicLong untilDate = new AtomicLong(
          dateFrom.toEpochMilli() + snapshotPeriod.toMillis());
          untilDate.get() <= dateTo.toEpochMilli()
              && untilDate.get() <= now + snapshotPeriod.toMillis();
          prevUntilDate.set(untilDate.get()), untilDate
              .set(untilDate.get() + snapshotPeriod.toMillis())
      ) {
        List<TextWork> periodWorks = works.stream().filter(work ->
            work.getCreateDate() >= prevUntilDate.get() && work.getCreateDate() < untilDate.get())
            .collect(Collectors.toList());

        WorkTypePopularity popularity = new WorkTypePopularity()
            .setWorksWritten(worksAmountBefore.get(analyzedType) + periodWorks.size())
            .setSnapshotDate(untilDate.get());
        worksAmountBefore.put(analyzedType, worksAmountBefore.get(analyzedType) + periodWorks.size());

        List<WorkTypePopularity> popularities = statistics.get(analyzedType);
        popularities.add(popularity);
        if (popularities.size() == snapshotsAmount || untilDate.get() > now) {
          break;
        }
      }
    }

    // чтобы узнать число снапшотов
    List<WorkTypePopularity> anyPopularities = statistics.get(
        statistics.keySet().iterator().next());

    return new WorkTypesPopularityStatistics()
        .setLength(anyPopularities.size())
        .setStatistics(statistics);
  }
}
