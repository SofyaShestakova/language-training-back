package ru.shestakova.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.util.Timestampable;

@Entity
@Table(name = "РАБОТА_С_ТЕКСТОМ")
@Data @EqualsAndHashCode(callSuper = false)
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class TextWork extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "РАБОТА_С_ТЕКСТОМ_n_ПАРАГРАФА_seq")
  @Column(name = "n_ТЕКСТА", nullable = false, updatable = false)
  Integer id;

  @Column(name = "ТЕКСТ", nullable = false)
  String text;

  @Column(name = "РЕЙТИНГ_ТЕКСТА", nullable = false)
  Integer rating;

  @ManyToOne(optional = false, fetch = FetchType.EAGER)
  @JoinColumn(name = "ИД_П", nullable = false, updatable = false)
  ServiceUser author;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "n_ПАРАГРАФА", nullable = false, updatable = false)
  BankText bankText;
}
