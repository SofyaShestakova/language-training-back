package ru.shestakova.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.BankText;
import ru.shestakova.model.QBankText;
import ru.shestakova.repository.filter.BankTextFilter;
import ru.shestakova.util.Merger;

public interface BankTextRepository extends JpaRepository<BankText, Integer>,
    QuerydslPredicateExecutor<BankText> {

  static int pageSize() {
    return Integer.MAX_VALUE;
  }

  default List<BankText> findAllByFilter(BankTextFilter filter) {
    filter = Merger.merge(filter, new BankTextFilter());

    QBankText text = QBankText.bankText;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getCreatedFrom() != null) {
      expression = expression.and(text.creationDate.goe(filter.getCreatedFrom()));
    }

    if (filter.getCreatedTo() != null) {
      expression = expression.and(text.creationDate.loe(filter.getCreatedTo()));
    }

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();
    Page<BankText> page = findAll(expression, PageRequest.of(pageIndex, pageSize()));

    List<BankText> content = page.getContent();
    content = content.subList(skip, content.size());

    if (content.size() > filter.getCount()) {
      content = content.subList(0, filter.getCount());
    }

    return content;
  }
}
