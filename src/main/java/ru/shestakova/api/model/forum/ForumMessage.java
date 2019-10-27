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
public class ForumMessage {
    Long messageId;
    Integer themeId;
    Long authorId;
    String text;
    MessageTerminationStatus terminationStatus;
    Long createDate;
    Long editDate;
    Long deleteDate;
}
