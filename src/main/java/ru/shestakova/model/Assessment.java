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
public class Assessment extends Timestampable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "AssessmentId", nullable = false, updatable = false)
  Long assessmentId;

  @ManyToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "WorkId", nullable = false, updatable = false)
  TextWork work;

  @OneToOne(optional = false, fetch = FetchType.LAZY)
  @JoinColumn(name = "ExpertId", nullable = false, updatable = false)
  ServiceUser expert;

  @Column(name = "MarkRating", nullable = false)
  Integer markRating;

  @Column(name = "Comment", nullable = false)
  String comment;
}
