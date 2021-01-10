package ru.shestakova.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.model.type.AssentMarkType;

@Entity
@Table(name = "ЗНАЧЕНИЕ_ОЦЕНКИ")
@Data
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class AssessmentMark {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ИД_ОЦ", insertable = false, nullable = false, updatable = false, unique = true)
  Integer id;

  @Enumerated(value = EnumType.ORDINAL)
  @Column(name = "ОЦЕНКА", insertable = false, nullable = false, updatable = false, unique = true)
  AssentMarkType type;

  @Column(name = "ЗНАЧЕНИЕ", insertable = false, nullable = false, updatable = false)
  String value;
}
