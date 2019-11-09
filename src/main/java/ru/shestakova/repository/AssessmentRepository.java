package ru.shestakova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.Assessment;
import ru.shestakova.model.QAssessment;
import ru.shestakova.repository.filter.AssessmentFilter;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface AssessmentRepository extends JpaRepository<Assessment, Long>,
    QuerydslPredicateExecutor<Assessment> {

  default Optional<Assessment> findByWorkIdAndExpertUserId(Long workId, Long userId) {
    QAssessment assessment = QAssessment.assessment;
    return findOne(assessment.work.workId.eq(workId).and(assessment.expert.userId.eq(userId)));
  }

//  Optional<Assessment> findByWorkWorkIdAndExpertUserId(Long workId, Long userId);

  default List<Assessment> findAllByFilter(AssessmentFilter filter) {
    return Collections.emptyList();
  }
}
