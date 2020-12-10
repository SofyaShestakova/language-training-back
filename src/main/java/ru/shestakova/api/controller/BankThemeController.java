package ru.shestakova.api.controller;

import static ru.shestakova.util.Merger.merge;

import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shestakova.model.BankTheme;
import ru.shestakova.repository.BankThemeRepository;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/bank_themes"
)
@AllArgsConstructor
public class BankThemeController {

  private final BankThemeRepository repository;

  @PostMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<BankTheme> create(@RequestBody BankTheme bankTheme) {
    return ResponseEntity.ok(repository.save(bankTheme));
  }

  @GetMapping(
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<List<BankTheme>> find() {
    final List<BankTheme> results = repository.findAll();
    if (results.isEmpty()) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(results);
    }
  }

  @GetMapping(
      path = "{id}",
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<BankTheme> findById(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PatchMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<BankTheme> update(@RequestBody BankTheme bankTheme) {
    return Optional.ofNullable(bankTheme)
        .filter(it -> bankTheme.getId() != null)
        .filter(it -> repository.findById(it.getId()).isPresent())
        .map(it -> merge(it, repository.findById(it.getId()).get()))
        .map(repository::save)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = "{id}")
  ResponseEntity<BankTheme> delete(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(it -> {
          repository.delete(it);
          return ResponseEntity.ok(it);
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
