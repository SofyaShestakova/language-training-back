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
public class Assessment {
    Long assessmentId;
    Long workId;
    Long expertId;
    AssessmentMark mark;
    String comment;
    Long editDate;
    Long createDate;
}
