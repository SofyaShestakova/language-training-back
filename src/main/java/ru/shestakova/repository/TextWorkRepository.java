package ru.shestakova.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QSort;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.QTextWork;
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.filter.TextWorkFilter;
import ru.shestakova.util.Merger;

public interface TextWorkRepository extends JpaRepository<TextWork, Integer>,
    QuerydslPredicateExecutor<TextWork> {

  static int pageSize() {
    return Integer.MAX_VALUE;
  }

  default List<TextWork> findAllByFilter(TextWorkFilter filter) {
    filter = Merger.merge(filter, new TextWorkFilter());

    QTextWork work = QTextWork.textWork;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getTextId() != null) {
      expression = expression.and(work.bankText.id.eq(filter.getTextId()));
    }

    if (filter.getAuthorId() != null) {
      expression = expression.and(work.author.id.eq(filter.getAuthorId()));
    }

    if (filter.getRatingFrom() != null && filter.getRatingFrom() >= 0) {
      expression = expression.and(work.rating.goe(filter.getRatingFrom()));
    }

    if (filter.getRatingTo() != null) {
      expression = expression.and(work.rating.loe(filter.getRatingTo()));
    }

    /*if (filter.getCount() > pageSize()) {
      filter.setCount(pageSize());
    }*/

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();

    QSort sort;
    switch (filter.getSort()) {
      case RATING_ASCENDING:
        sort = new QSort(work.rating.asc());
        break;
      case RATING_DESCENDING:
        sort = new QSort(work.rating.desc());
        break;
      case AUTHOR_ID:
        sort = new QSort(work.author.id.desc());
        break;
      case NEWEST:
        sort = new QSort(work.id.desc());
        break;
      case OLDEST:
        sort = new QSort(work.id.asc());
        break;
      default:
        sort = new QSort();
    }

    Page<TextWork> page = findAll(expression, PageRequest.of(pageIndex, pageSize(), sort));

    List<TextWork> content = page.getContent();
    content = content.subList(skip, content.size());

    if (content.size() > filter.getCount()) {
      content = content.subList(0, filter.getCount());
    }

    return content;
  }
}
