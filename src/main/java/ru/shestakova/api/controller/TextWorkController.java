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
import ru.shestakova.model.TextWork;
import ru.shestakova.repository.TextWorkRepository;
import ru.shestakova.repository.filter.TextWorkFilter;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/text_works"
)
@AllArgsConstructor
public class TextWorkController {

  private final TextWorkRepository repository;

  @PostMapping(
      path = "create",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<TextWork> create(@RequestBody TextWork textWork) {
    return ResponseEntity.ok(repository.save(textWork.setRating(0)));
  }

  @PostMapping(
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<List<TextWork>> find(@RequestBody(required = false) TextWorkFilter filter) {
    final List<TextWork> results = repository.findAllByFilter(filter);
//    final List<TextWork> results = repository.findAll();
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
  ResponseEntity<TextWork> findById(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PatchMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<TextWork> update(@RequestBody TextWork textWork) {
    return Optional.ofNullable(textWork)
        .filter(it -> textWork.getId() != null)
        .filter(it -> repository.findById(it.getId()).isPresent())
        .map(it -> repository.save(merge(it, repository.findById(it.getId()).get())))
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = "{id}")
  ResponseEntity<TextWork> delete(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(it -> {
          repository.delete(it);
          return ResponseEntity.ok(it);
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
