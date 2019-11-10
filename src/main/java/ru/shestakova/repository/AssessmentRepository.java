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

public interface AssessmentRepository extends JpaRepository<Assessment, Long>,
    QuerydslPredicateExecutor<Assessment> {

  static int pageSize() {
    return 50;
  }

  default Optional<Assessment> findByWorkIdAndExpertUserId(Long workId, Long userId) {
    QAssessment assessment = QAssessment.assessment;
    return findOne(assessment.work.workId.eq(workId).and(assessment.expert.userId.eq(userId)));
  }

  default List<Assessment> findAllByFilter(AssessmentFilter filter) {
    QAssessment assessment = QAssessment.assessment;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if (filter.getExpertId() != null) {
      expression = expression.and(assessment.expert.userId.eq(filter.getExpertId()));
    }

    if (filter.getWorkId() != null) {
      expression = expression.and(assessment.work.workId.eq(filter.getWorkId()));
    }

    if (filter.getMarks() != null && !filter.getMarks().isEmpty()) {
      expression = expression.and(assessment.markRating.in(filter.getMarks()));
    }

    if (filter.getCreatedFrom() != null && filter.getCreatedFrom() >= 0) {
      expression = expression.and(assessment.createDate.goe(filter.getCreatedFrom()));
    }

    if (filter.getCreatedTo() != null) {
      expression = expression.and(assessment.createDate.loe(filter.getCreatedTo()));
    }

    if (filter.getEditedFrom() != null && filter.getEditedFrom() >= 0) {
      expression = expression.and(assessment.editDate.goe(filter.getEditedFrom()));
    }

    if (filter.getEditedTo() != null) {
      expression = expression.and(assessment.editDate.loe(filter.getEditedTo()));
    }

    QSort sort;
    switch (filter.getSort()) {
      case RATING_ASCENDING:
        sort = new QSort(assessment.markRating.asc());
        break;
      case RATING_DESCENDING:
        sort = new QSort(assessment.markRating.desc());
        break;
      case NEWEST:
        sort = new QSort(assessment.createDate.desc());
        break;
      case OLDEST:
        sort = new QSort(assessment.createDate.asc());
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
