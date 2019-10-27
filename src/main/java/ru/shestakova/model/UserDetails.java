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
public class UserDetails extends Timestampable {

  @Id
  @Column(name = "UserId", nullable = false, updatable = false)
  Long userId;

  @Column(name = "LevelCode", nullable = false)
  Integer levelCode;

  @Column(name = "ScreenName")
  String screenName;

  @Column(name = "Rating", nullable = false)
  Integer rating;

  @Column(name = "Bio")
  String bio;

  @OneToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "UserId")
  @ToString.Exclude @EqualsAndHashCode.Exclude
  ServiceUser user;
}

