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
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;
import ru.shestakova.model.type.PostgreSQLEnumType;
import ru.shestakova.model.type.TextWorkType;

@Entity
@Table(name = "РАБОТА_С_ТЕКСТОМ")
@Data @EqualsAndHashCode(callSuper = false)
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
@JsonInclude(Include.NON_NULL)
@TypeDef(
    name = "pgsql_enum",
    typeClass = PostgreSQLEnumType.class
)
public class TextWork {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "РАБОТА_С_ТЕКСТОМ_n_ПАРАГРАФА_seq")
  @SequenceGenerator(name = "РАБОТА_С_ТЕКСТОМ_n_ПАРАГРАФА_seq", allocationSize = 1)
  @Column(name = "n_ТЕКСТА", nullable = false, updatable = false)
  Integer id;

  @Column(name = "ТЕКСТ", nullable = false)
  String text;

  @Column(name = "РЕЙТИНГ_ТЕКСТА", nullable = false)
  Integer rating = 0;

  @Enumerated(EnumType.STRING)
  @Column(name = "ФОРМАТ", nullable = false, columnDefinition = "s244705.ФОРМАТ")
  @Type(type = "pgsql_enum")
  TextWorkType type;

  @ManyToOne(optional = false)
  @JoinColumn(name = "ИД_П", nullable = false, updatable = false)
  ServiceUser author;

  @ManyToOne(optional = false)
  @JoinColumn(name = "n_ПАРАГРАФА", nullable = false, updatable = false)
  BankText bankText;
}
