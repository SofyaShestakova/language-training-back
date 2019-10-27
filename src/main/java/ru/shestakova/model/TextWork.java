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
public class TextWork extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "WorkId", nullable = false, updatable = false)
  Long workId;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "TextId", nullable = false, updatable = false)
  BankText text;

  @ManyToOne(optional = false, fetch = FetchType.EAGER)
  @JoinColumn(name = "AuthorId", nullable = false, updatable = false)
  ServiceUser author;

  @Column(name = "Type", nullable = false, updatable = false)
  Integer type;

  @Column(name = "WorkTitle", nullable = false)
  String workTitle;

  @Column(name = "WorkText", nullable = false)
  String workText;

  @Column(name = "Rating", nullable = false)
  Integer rating;
}
