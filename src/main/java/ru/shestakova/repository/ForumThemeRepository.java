package ru.shestakova.repository;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.ForumTheme;
import ru.shestakova.model.QForumTheme;
import ru.shestakova.repository.filter.ForumThemeFilter;

import java.util.List;

public interface ForumThemeRepository extends JpaRepository<ForumTheme, Integer>,
        QuerydslPredicateExecutor<ForumTheme> {

  static int pageSize() {
    return 50;
  }

  List<ForumTheme> findAllByAuthorUserId(Long userId);

  default List<ForumTheme> findThemesByFilter(ForumThemeFilter filter) {
    QForumTheme theme = QForumTheme.forumTheme;
    BooleanExpression expression = Expressions.asBoolean(true).isTrue();

    if(filter.getAuthorId() != null) {
      expression = expression.and(theme.author.userId.eq(filter.getAuthorId()));
    }

    if(filter.getCreatedFrom() != null) {
      expression = expression.and(theme.createDate.goe(filter.getCreatedFrom()));
    }

    if(filter.getCreatedTo() != null) {
      expression = expression.and(theme.createDate.loe(filter.getCreatedTo()));
    }

    if(filter.getEditedFrom() != null) {
      expression = expression.and(theme.editDate.goe(filter.getEditedFrom()));
    }

    if(filter.getEditedTo() != null) {
      expression = expression.and(theme.editDate.loe(filter.getEditedTo()));
    }

    if(filter.getLastMessageFrom() != null) {
      expression = expression.and(theme.lastMessageDate.goe(filter.getLastMessageFrom()));
    }

    if(filter.getLastMessageTo() != null) {
      expression = expression.and(theme.lastMessageDate.loe(filter.getLastMessageTo()));
    }

    if(filter.getTotalMessagesFrom() != null) {
      expression = expression.and(theme.totalMessages.goe(filter.getTotalMessagesFrom()));
    }

    if(filter.getTotalMessagesTo() != null) {
      expression = expression.and(theme.totalMessages.loe(filter.getTotalMessagesTo()));
    }

    if(filter.getCount() > pageSize()) {
      filter.setCount(pageSize());
    }

    int pageIndex = filter.getFrom() / pageSize();
    int skip = filter.getFrom() % pageSize();
    Page<ForumTheme> page = findAll(expression, PageRequest.of(pageIndex, pageSize()));

    List<ForumTheme> content = page.getContent();
    return content.subList(skip, content.size());
  }
}
