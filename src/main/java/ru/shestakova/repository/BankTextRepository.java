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

public interface BankTextRepository extends JpaRepository<BankText, Integer>,
    QuerydslPredicateExecutor<BankText> {

  static int pageSize() {
    return 50;
  }

  default List<BankText> findAllByFilter(BankTextFilter filter) {
    QBankText text = QBankText.bankText;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getCreatedFrom() != null && filter.getCreatedFrom() >= 0) {
      expression = expression.and(text.createDate.goe(filter.getCreatedFrom()));
    }

    if (filter.getCreatedTo() != null) {
      expression = expression.and(text.createDate.loe(filter.getCreatedTo()));
    }

    if (filter.getEditedFrom() != null && filter.getEditedFrom() >= 0) {
      expression = expression.and(text.editDate.goe(filter.getEditedFrom()));
    }

    if (filter.getEditedTo() != null) {
      expression = expression.and(text.editDate.loe(filter.getEditedTo()));
    }

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();
    Page<BankText> page = findAll(expression, PageRequest.of(pageIndex, pageSize()));

    List<BankText> content = page.getContent();
    return content.subList(skip, content.size());
  }
}
