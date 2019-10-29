package ru.shestakova.model;

import lombok.*;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Repository;
import ru.shestakova.util.Timestampable;

import javax.persistence.*;

@Entity
@Table
@Repository
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode(callSuper = false)
public class BankText extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "TextId", insertable = false, nullable = false, updatable = false)
  Integer textId;

  @Column(name = "Title", nullable = false)
  String title;

  @Column(name = "Text", nullable = false, length = 2048)
  String text;

  @ManyToOne
  @JoinColumn(name = "AuthorId", nullable = false, updatable = false)
  ServiceUser author;
}
