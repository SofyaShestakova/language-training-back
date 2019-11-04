package ru.shestakova.api.service.impl;

import ru.shestakova.api.model.filter.*;
import ru.shestakova.api.model.forum.ForumMessage;
import ru.shestakova.api.model.forum.ForumTheme;
import ru.shestakova.api.model.forum.MessageTerminationStatus;
import ru.shestakova.api.model.forum.ThemeTerminationStatus;
import ru.shestakova.api.model.text.*;
import ru.shestakova.api.model.user.ServiceUser;
import ru.shestakova.api.model.user.UserDetails;
import ru.shestakova.api.model.user.UserLevel;
import ru.shestakova.api.model.user.UserRole;

import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Mappers {

  public static ForumTheme mapFrom(ru.shestakova.model.ForumTheme theme) {
    return new ForumTheme()
        .setThemeId(theme.getThemeId())
        .setAuthorId(theme.getAuthor().getUserId())
        .setThemeName(theme.getThemeName())
        .setMessageId(theme.getMessage() == null ? null : theme.getMessage().getMessageId())
        .setTotalMessages(theme.getTotalMessages())
        .setTerminationStatus(theme.getTerminationStatus() == null ? null
            : ThemeTerminationStatus.fromNumeric(theme.getTerminationStatus()))
        .setLastMessageDate(theme.getLastMessageDate())
        .setEditDate(theme.getEditDate())
        .setCreateDate(theme.getCreateDate())
        .setCloseDate(theme.getCloseDate());
  }

  public static ForumMessage mapFrom(ru.shestakova.model.ForumMessage message) {
    return new ForumMessage()
        .setMessageId(message.getMessageId())
        .setThemeId(message.getTheme().getThemeId())
        .setAuthorId(message.getAuthor().getUserId())
        .setText(message.getText())
        .setTerminationStatus(MessageTerminationStatus.fromNumeric(message.getTerminationStatus()))
        .setCreateDate(message.getCreateDate())
        .setEditDate(message.getEditDate())
        .setDeleteDate(message.getDeleteDate());
  }

  public static ServiceUser mapFrom(ru.shestakova.model.ServiceUser user) {
    return new ServiceUser()
        .setUserId(user.getUserId())
        .setUsername(user.getUsername())
        .setEmail(user.getEmail())
        .setAvatarURL(user.getAvatarUrl())
        .setRole(UserRole.fromId(user.getRole()));
  }

  public static UserDetails mapFrom(ru.shestakova.model.UserDetails details) {
    UserDetails detail = new UserDetails();
    if(details.getLevelCode() != null) {
      detail.setLevel(UserLevel.fromNumeric(details.getLevelCode()));
    }
    return detail
        .setScreenName(details.getScreenName())
        .setRating(details.getRating())
        .setBio(details.getBio())
        .setEditDate(details.getEditDate())
        .setCreateDate(details.getCreateDate());
  }

  public static Assessment mapFrom(ru.shestakova.model.Assessment assessment) {
    return new Assessment()
        .setAssessmentId(assessment.getAssessmentId())
        .setWorkId(assessment.getWork().getWorkId())
        .setExpertId(assessment.getExpert().getUserId())
        .setMark(AssessmentMark.fromNumeric(assessment.getMarkRating()))
        .setComment(assessment.getComment())
        .setEditDate(assessment.getEditDate())
        .setCreateDate(assessment.getCreateDate());
  }

  public static BankText mapFrom(ru.shestakova.model.BankText text) {
    return new BankText()
        .setTextId(text.getTextId())
        .setTitle(text.getTitle())
        .setText(text.getText())
        .setAuthorId(text.getAuthor().getUserId())
        .setEditDate(text.getEditDate())
        .setCreateDate(text.getCreateDate());
  }

  public static TextWork mapFrom(ru.shestakova.model.TextWork work) {
    return new TextWork()
        .setWorkId(work.getWorkId())
        .setTitle(work.getWorkTitle())
        .setText(work.getWorkText())
        .setTextId(work.getText().getTextId())
        .setAuthorId(work.getAuthor().getUserId())
        .setType(WorkType.fromNumeric(work.getType()))
        .setEditDate(work.getEditDate())
        .setCreateDate(work.getCreateDate());
  }

  public static ru.shestakova.repository.filter.ForumThemeFilter mapFrom(ForumThemeFilter filter) {
    return new ru.shestakova.repository.filter.ForumThemeFilter()
        .setAuthorId(filter.getAuthorId())
        .setFrom(filter.getFrom())
        .setCount(filter.getCount())
        .setCreatedFrom(
            filter.getCreatedFrom() == null ? null : filter.getCreatedFrom().toEpochMilli())
        .setCreatedTo(filter.getCreatedTo() == null ? null : filter.getCreatedTo().toEpochMilli())
        .setEditedFrom(
            filter.getEditedFrom() == null ? null : filter.getEditedFrom().toEpochMilli())
        .setEditedTo(filter.getEditedTo() == null ? null : filter.getEditedTo().toEpochMilli())
        .setLastMessageFrom(
            filter.getLastMessageFrom() == null ? null : filter.getLastMessageFrom().toEpochMilli())
        .setLastMessageTo(
            filter.getLastMessageTo() == null ? null : filter.getLastMessageTo().toEpochMilli())
        .setTotalMessagesFrom(filter.getTotalMessagesFrom())
        .setTotalMessagesTo(filter.getTotalMessagesTo())
        .setTerminationStatuses(
            filter.getTerminationStatuses().stream()
                  .map(ThemeTerminationStatus::getValue)
                  .collect(Collectors.toList())
        );
  }

  public static ru.shestakova.repository.filter.ForumMessageFilter mapFrom(
      ForumMessageFilter filter) {
    return new ru.shestakova.repository.filter.ForumMessageFilter()
        .setThemeId(filter.getThemeId())
        .setAuthorId(filter.getAuthorId())
        .setFrom(filter.getFrom())
        .setCount(filter.getCount())
        .setCreatedFrom(
            filter.getCreatedFrom() == null ? null : filter.getCreatedFrom().toEpochMilli())
        .setCreatedTo(filter.getCreatedTo() == null ? null : filter.getCreatedTo().toEpochMilli())
        .setEditedFrom(
            filter.getEditedFrom() == null ? null : filter.getEditedFrom().toEpochMilli())
        .setEditedTo(filter.getEditedTo() == null ? null : filter.getEditedTo().toEpochMilli())
        .setDeletedFrom(
            filter.getDeletedFrom() == null ? null : filter.getDeletedFrom().toEpochMilli())
        .setDeletedTo(filter.getDeletedTo() == null ? null : filter.getDeletedTo().toEpochMilli())
        .setTerminationStatuses(
            filter.getTerminationStatuses().stream()
                  .map(MessageTerminationStatus::getValue)
                  .collect(Collectors.toList())
        );
  }

  public static ru.shestakova.repository.filter.AssessmentFilter mapFrom(AssessmentFilter filter) {
    return new ru.shestakova.repository.filter.AssessmentFilter()
        .setFrom(filter.getFrom())
        .setCount(filter.getCount())
        .setExpertId(filter.getExpertId())
        .setMarks(filter.getMarks() == null
            ? Stream.of(AssessmentMark.values())
                    .map(AssessmentMark::getValue)
                    .collect(Collectors.toList())
            : filter.getMarks().stream()
                    .map(AssessmentMark::getValue)
                    .collect(Collectors.toList())
        )
        .setCreatedFrom(filter.getCreatedFrom() == null ? null
            : filter.getCreatedFrom().toEpochMilli())
        .setCreatedTo(filter.getCreatedTo() == null ? null
            : filter.getCreatedTo().toEpochMilli())
        .setEditedFrom(filter.getEditedFrom() == null ? null
            : filter.getEditedFrom().toEpochMilli())
        .setEditedTo(filter.getEditedTo() == null ? null
            : filter.getEditedTo().toEpochMilli());
  }

  public static ru.shestakova.repository.filter.BankTextFilter mapFrom(BankTextFilter filter) {
    return new ru.shestakova.repository.filter.BankTextFilter()
        .setFrom(filter.getFrom())
        .setCount(filter.getCount())
        .setCreatedFrom(filter.getCreatedFrom() == null ? null
            : filter.getCreatedFrom().toEpochMilli())
        .setCreatedTo(filter.getCreatedTo() == null ? null
            : filter.getCreatedTo().toEpochMilli())
        .setEditedFrom(filter.getEditedFrom() == null ? null
            : filter.getEditedFrom().toEpochMilli())
        .setEditedTo(filter.getEditedTo() == null ? null
            : filter.getEditedTo().toEpochMilli());
  }

  public static ru.shestakova.repository.filter.TextWorkFilter mapFrom(TextWorkFilter filter) {
    return new ru.shestakova.repository.filter.TextWorkFilter()
        .setFrom(filter.getFrom())
        .setCount(filter.getCount())
        .setTextId(filter.getTextId())
        .setAuthorId(filter.getAuthorId())
        .setWorkTypes(
            filter.getWorkTypes() == null
                ? Stream.of(WorkType.values())
                        .map(WorkType::getValue)
                        .collect(Collectors.toList())
                : filter.getWorkTypes().stream()
                        .map(WorkType::getValue)
                        .collect(Collectors.toList())
        )
        .setRatingFrom(filter.getRatingFrom())
        .setRatingTo(filter.getRatingTo())
        .setCreatedFrom(filter.getCreatedFrom() == null ? null
            : filter.getCreatedFrom().toEpochMilli())
        .setCreatedTo(filter.getCreatedTo() == null ? null
            : filter.getCreatedTo().toEpochMilli())
        .setEditedFrom(filter.getEditedFrom() == null ? null
            : filter.getEditedFrom().toEpochMilli())
        .setEditedTo(filter.getEditedTo() == null ? null
            : filter.getEditedTo().toEpochMilli());
  }
}
