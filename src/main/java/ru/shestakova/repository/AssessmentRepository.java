package ru.shestakova.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QSort;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.Assessment;
import ru.shestakova.model.QAssessment;
import ru.shestakova.repository.filter.AssessmentFilter;

public interface AssessmentRepository extends JpaRepository<Assessment, Assessment.Id>,
    QuerydslPredicateExecutor<Assessment> {

  static int pageSize() {
    return 50;
  }

  default Optional<Assessment> findByWorkIdAndExpertUserId(Integer workId, Integer userId) {
    QAssessment assessment = QAssessment.assessment;
    return findOne(assessment.id.textWork.id.eq(workId).and(assessment.id.author.id.eq(userId)));
  }

  default List<Assessment> findAllByFilter(AssessmentFilter filter) {
    QAssessment assessment = QAssessment.assessment;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getAuthorId() != null) {
      expression = expression.and(assessment.id.author.id.eq(filter.getAuthorId()));
    }

    if (filter.getWorkId() != null) {
      expression = expression.and(assessment.id.textWork.id.eq(filter.getWorkId()));
    }

    if (filter.getMarks() != null && !filter.getMarks().isEmpty()) {
      expression = expression.and(assessment.mark.value.in(filter.getMarks()));
    }

    QSort sort;
    switch (filter.getSort()) {
      case RATING_ASCENDING:
        sort = new QSort(assessment.mark.value.asc());
        break;
      case RATING_DESCENDING:
        sort = new QSort(assessment.mark.value.desc());
        break;
      case NEWEST:
        sort = new QSort(assessment.id.textWork.id.desc());
        break;
      case OLDEST:
        sort = new QSort(assessment.id.textWork.id.asc());
        break;
      default:
        sort = new QSort();
    }

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();
    Page<Assessment> page = findAll(expression, PageRequest.of(pageIndex, pageSize(), sort));

    List<Assessment> content = page.getContent();
    content = content.subList(skip, content.size());

    if (content.size() > filter.getCount()) {
      content = content.subList(0, filter.getCount());
    } else if (!content.isEmpty() && content.size() < filter.getCount()) {
      List<Assessment> moreContent = findAllByFilter(filter
          .setFrom(filter.getFrom() + content.size())
          .setCount(filter.getCount() - content.size())
      );
      if(!moreContent.isEmpty()) {
        content.addAll(moreContent);
      }
    }

    return content;
  }
}
