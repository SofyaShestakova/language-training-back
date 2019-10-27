package ru.shestakova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.filter.TextWorkFilter;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

public interface TextWorkRepository extends JpaRepository<TextWork, Long> {

  Optional<TextWork> findByTextTextIdAndAuthorUserIdAndType(
          Integer textId, Long userId, Integer type
  );

  default List<TextWork> findAllByFilter(TextWorkFilter filter) {
    return Collections.emptyList();
  }
}
