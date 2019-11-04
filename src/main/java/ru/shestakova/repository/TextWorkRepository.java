package ru.shestakova.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.QTextWork;
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.filter.TextWorkFilter;

public interface TextWorkRepository extends JpaRepository<TextWork, Long>,
    QuerydslPredicateExecutor<TextWork> {

  static int pageSize() {
    return 50;
  }

  Optional<TextWork> findByTextTextIdAndAuthorUserIdAndType(
      Integer textId, Long userId, Integer type
  );

  default List<TextWork> findAllByFilter(TextWorkFilter filter) {
    QTextWork work = QTextWork.textWork;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getTextId() != null) {
      expression = expression.and(work.text.textId.eq(filter.getTextId()));
    }

    if (filter.getAuthorId() != null) {
      expression = expression.and(work.author.userId.eq(filter.getAuthorId()));
    }

    if (filter.getWorkTypes() != null && !filter.getWorkTypes().isEmpty()) {
      expression = expression.and(work.type.in(filter.getWorkTypes()));
    }

    if (filter.getRatingFrom() != null && filter.getRatingFrom() >= 0) {
      expression = expression.and(work.rating.goe(filter.getRatingFrom()));
    }

    if (filter.getRatingTo() != null) {
      expression = expression.and(work.rating.loe(filter.getRatingTo()));
    }

    if (filter.getCreatedFrom() != null && filter.getCreatedFrom() >= 0) {
      expression = expression.and(work.createDate.goe(filter.getCreatedFrom()));
    }

    if (filter.getCreatedTo() != null) {
      expression = expression.and(work.createDate.loe(filter.getCreatedTo()));
    }

    if (filter.getEditedFrom() != null && filter.getEditedFrom() >= 0) {
      expression = expression.and(work.editDate.goe(filter.getEditedFrom()));
    }

    if (filter.getEditedTo() != null) {
      expression = expression.and(work.editDate.loe(filter.getEditedTo()));
    }

    if (filter.getCount() > pageSize()) {
      filter.setCount(pageSize());
    }

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();

    Sort sort;
    switch (filter.getSort()) {
      case RATING_ASCENDING:
        sort = Sort.by(Direction.ASC, "Rating");
        break;
      case RATING_DESCENDING:
        sort = Sort.by(Direction.DESC, "Rating");
        break;
      case AUTHOR_ID:
        sort = Sort.by(Direction.ASC, "AuthorId");
        break;
      case NEWEST:
        sort = Sort.by(Direction.DESC, "CreateDate");
        break;
      case OLDEST:
        sort = Sort.by(Direction.ASC, "CreateDate");
        break;
      default:
        sort = Sort.unsorted();
    }

    Page<TextWork> page = findAll(expression, PageRequest.of(pageIndex, pageSize(), sort));

    List<TextWork> content = page.getContent();
    return content.subList(skip, content.size());
  }
}
