package ru.shestakova.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import ru.shestakova.util.Timestampable;

@Entity
@Table(name = "БАНК_ТЕМ_ФОРУМ")
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode(callSuper = false)
@JsonInclude(Include.NON_NULL)
public class ForumTheme extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "БАНК_ТЕМ_ФОРУМ_n_ТЕМЫ_seq")
  @Column(name = "n_ТЕМЫ", nullable = false, updatable = false)
  Integer id;

  @Column(name = "НАЗВАНИЕ_ТЕМЫ", nullable = false)
  String name;

  @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "theme", fetch = FetchType.LAZY)
  @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED)
  Set<ForumMessage> messages;
}
