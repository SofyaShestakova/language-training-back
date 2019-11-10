package ru.shestakova.api.model.text;

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
public class TextWork {
    Long workId;
    String title;
    String text;
    Integer textId;
    Long authorId;
    WorkType type;
    Long editDate;
    Long createDate;
    Integer rating;
}
