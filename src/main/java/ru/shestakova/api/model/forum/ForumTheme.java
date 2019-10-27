package ru.shestakova.api.model.forum;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Data
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor
@AllArgsConstructor
public class ForumTheme {
    Integer themeId;
    Long authorId;
    String themeName;
    Long messageId;
    Integer totalMessages;
    ThemeTerminationStatus terminationStatus;
    Long lastMessageDate;
    Long editDate;
    Long createDate;
    Long closeDate;
}
