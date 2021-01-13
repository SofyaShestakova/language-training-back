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
import ru.shestakova.model.BankText;
import ru.shestakova.repository.BankTextRepository;
import ru.shestakova.repository.filter.BankTextFilter;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/bank_texts"
)
@AllArgsConstructor
public class BankTextController {

  private final BankTextRepository repository;

  @PostMapping(
      path = "create",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<BankText> create(@RequestBody BankText bankText) {
    return ResponseEntity.ok(repository.save(bankText));
  }

  @PostMapping(
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<List<BankText>> find(@RequestBody(required = false) BankTextFilter filter) {
//    final List<BankText> results = repository.findAllByFilter(filter);
    final List<BankText> results = repository.findAllByFilter(filter);
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
  ResponseEntity<BankText> findById(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PatchMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<BankText> update(@RequestBody BankText bankText) {
    return Optional.ofNullable(bankText)
        .filter(it -> bankText.getId() != null)
        .filter(it -> repository.findById(it.getId()).isPresent())
        .map(it -> repository.save(merge(it, repository.findById(it.getId()).get())))
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = "{id}")
  ResponseEntity<BankText> delete(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(it -> {
          repository.delete(it);
          return ResponseEntity.ok(it);
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
