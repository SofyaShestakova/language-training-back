package ru.shestakova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shestakova.model.Assessment;
import ru.shestakova.repository.filter.AssessmentFilter;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface AssessmentRepository extends JpaRepository<Assessment, Long> {

  Optional<Assessment> findByWorkWorkIdAndExpertUserId(Long workId, Long expertId);

  default List<Assessment> findAllByFilter(AssessmentFilter filter) {
    return Collections.emptyList();
  }
}
