package ru.shestakova.api.service;

import ru.shestakova.api.model.filter.ForumThemeFilter;
import ru.shestakova.api.model.forum.ForumTheme;
import ru.shestakova.api.model.forum.ThemeTerminationStatus;
import ru.shestakova.api.request.forum.CreateThemeRequest;
import ru.shestakova.api.request.forum.EditThemeRequest;
import ru.shestakova.api.response.forum.CreateThemeResponse;
import ru.shestakova.api.response.forum.EditThemeResponse;
import ru.shestakova.api.response.forum.GetThemesResponse;
import ru.shestakova.api.response.forum.TerminateThemeResponse;

import java.util.Optional;

public interface ForumThemeService {

  CreateThemeResponse createTheme(Long initiatorId, CreateThemeRequest request);

  Optional<ForumTheme> getTheme(Integer themeId);

  GetThemesResponse findThemesByFilter(ForumThemeFilter filter);

  EditThemeResponse editTheme(Long initiatorId, Integer themeId, EditThemeRequest request);

  TerminateThemeResponse terminateTheme(Long initiatorId, Integer themeId,
                                        ThemeTerminationStatus terminationStatus);
}
