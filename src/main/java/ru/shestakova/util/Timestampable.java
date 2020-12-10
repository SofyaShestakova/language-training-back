package ru.shestakova.util;

import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@MappedSuperclass
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PROTECTED)
public abstract class Timestampable implements Serializable {

  @Column(name = "ДАТА_СОЗДАНИЯ", updatable = false)
  LocalDate creationDate;

  @PrePersist
  void createdAt() {
    if (this.creationDate == null) {
      this.creationDate = LocalDate.now();
    }
  }
}
