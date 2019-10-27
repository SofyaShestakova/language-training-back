package ru.shestakova.model;

import lombok.*;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;
import org.springframework.stereotype.Repository;

import javax.persistence.*;
import java.util.Set;
import java.util.UUID;

@Entity
@Table
@Repository
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class ServiceUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "UserId", unique = true, nullable = false, updatable = false, insertable = false)
  Long userId;

  @Column(name = "Username", unique = true, nullable = false, columnDefinition = "VARCHAR(40)")
  String username;

  @Column(name = "Password", nullable = false)
  String password;

  @Column(name = "Email", unique = true)
  String email;

  @Column(name = "AvatarUrl", nullable = false)
  String avatarUrl;

  @Column(name = "AuthToken")
  UUID authToken;

  @Column(name = "Role")
  String role;

  @OneToOne(cascade = CascadeType.ALL, mappedBy = "user", optional = false, fetch = FetchType.LAZY)
  UserDetails details;

  @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
  @Getter(AccessLevel.NONE) @Setter(AccessLevel.NONE)
  @EqualsAndHashCode.Exclude @ToString.Exclude
  Set<ForumMessage> messages;

  @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
  @Getter(AccessLevel.NONE) @Setter(AccessLevel.NONE)
  @EqualsAndHashCode.Exclude @ToString.Exclude
  Set<BankText> texts;
}
