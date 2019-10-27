package ru.shestakova.model;

import lombok.*;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Repository;
import ru.shestakova.util.Timestampable;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table
@Repository
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor @EqualsAndHashCode(callSuper = false)
public class ForumTheme extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ThemeId", nullable = false, updatable = false)
  Integer themeId;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "AuthorId", nullable = false, updatable = false)
  ServiceUser author;

  @Column(name = "ThemeName", nullable = false)
  String themeName;

  @OneToOne
  @JoinColumn(name = "MessageId")
  ForumMessage message;

  @Column(name = "TotalMessages", nullable = false)
  Integer totalMessages;

  @Column(name = "TerminationStatus", nullable = false)
  Integer terminationStatus;

  @Column(name = "LastMessageDate")
  Long lastMessageDate;

  @Column(name = "CloseDate")
  Long closeDate;

  @OneToMany(cascade = CascadeType.REMOVE, mappedBy = "theme", fetch = FetchType.LAZY)
  @Getter(AccessLevel.PROTECTED) @Setter(AccessLevel.PROTECTED)
  Set<ForumMessage> messages;
}
