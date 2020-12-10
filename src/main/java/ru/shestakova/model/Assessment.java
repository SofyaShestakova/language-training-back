package ru.shestakova.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "ОЦЕНИВАНИЕ")
@Data
@Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class Assessment {

  @EmbeddedId
  Id id;

  @Column(name = "КОММЕНТАРИЙ", nullable = false)
  String comment;

  @ManyToOne(optional = false, fetch = FetchType.EAGER)
  @JoinColumn(name = "ИД_ОЦ", nullable = false)
  AssessmentMark mark;

  @Embeddable
  @Data
  @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
  @NoArgsConstructor @AllArgsConstructor
  public static class Id implements Serializable {
    /*@Column(name = "ИД_П", nullable = false, updatable = false)
    Integer authorId;

    @Column(name = "n_ТЕКСТА", nullable = false, updatable = false)
    Integer textWorkId;*/
    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "ИД_П", nullable = false, updatable = false)
    ServiceUser author;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "n_ТЕКСТА", nullable = false, updatable = false)
    TextWork textWork;
  }
}
