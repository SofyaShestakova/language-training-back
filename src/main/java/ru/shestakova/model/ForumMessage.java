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
import javax.persistence.SequenceGenerator;
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
@Table(name = "СООБЩЕНИЕ_ФОРУМ")
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode(callSuper = false)
@JsonInclude(Include.NON_NULL)
public class ForumMessage extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "СООБЩЕНИЕ_ФОРУМ_ИД_П_seq")
  @SequenceGenerator(name = "СООБЩЕНИЕ_ФОРУМ_ИД_П_seq", allocationSize = 1)
  @Column(name = "n_СООБЩЕНИЯ", insertable = false, updatable = false, unique = true)
  Integer id;

  @Column(name = "СООБЩЕНИЕ", nullable = false)
  String text;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "n_ТЕМЫ", updatable = false)
  ForumTheme theme;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "ИД_П", nullable = false, updatable = false)
  ServiceUser author;
}
