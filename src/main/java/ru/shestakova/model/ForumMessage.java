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
public class ForumMessage extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "MessageId", insertable = false, updatable = false)
  Long messageId;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "AuthorId", nullable = false, updatable = false)
  ServiceUser author;

  @Column(name = "MessageText", nullable = false)
  String text;

  @Column(name = "TerminationStatus", nullable = false)
  Integer terminationStatus;

  @Column(name = "DeleteDate")
  Long deleteDate;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "ThemeId", updatable = false)
  ForumTheme theme;
}
