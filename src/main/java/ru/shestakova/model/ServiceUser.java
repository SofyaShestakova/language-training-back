package ru.shestakova.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "ПОЛЬЗОВАТЕЛЬ")
@Data @Accessors(chain = true) @FieldDefaults(level = AccessLevel.PRIVATE)
@NoArgsConstructor @AllArgsConstructor
public class ServiceUser {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ИД_П", unique = true, nullable = false, updatable = false)
  Integer id;

  @Column(name = "ИМЯ", unique = true, nullable = false)
  String name;

  @Column(name = "УРОВЕНЬ")
  Integer level;

  @Column(name = "РЕЙТИНГ")
  Integer rating;
}
