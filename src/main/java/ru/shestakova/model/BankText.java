package ru.shestakova.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "БАНК_ПАРАГРАФ")
@Data @EqualsAndHashCode(callSuper = false)
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class BankText extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ИД_ПАРАГРАФ", insertable = false, nullable = false, updatable = false)
  Integer id;

  @Column(name = "n_ПАРАГРАФА", nullable = false, updatable = false)
  Integer textNumber = (id != null) ? id + 1 : 1;

  @Column(name = "ТЕКСТ_ПАРАГРАФА", nullable = false)
  String text;

  @ManyToOne(optional = false)
  @JoinColumn(name = "ИД_ТЕМ")
  BankTheme theme;
}
