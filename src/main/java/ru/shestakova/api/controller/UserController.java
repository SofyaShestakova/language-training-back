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
import ru.shestakova.model.ServiceUser;
import ru.shestakova.repository.ServiceUserRepository;
import ru.shestakova.repository.filter.ServiceUserFilter;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/users"
)
@AllArgsConstructor
public class UserController {

  private final ServiceUserRepository repository;

  @PostMapping(
      path = "create",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<ServiceUser> create(@RequestBody ServiceUser ServiceUser) {
    return ResponseEntity.ok(repository.save(ServiceUser));
  }

  @PostMapping(
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<List<ServiceUser>> find(@RequestBody(required = false) ServiceUserFilter filter) {
//    final List<ServiceUser> results = repository.findAllByFilter(filter);
    final List<ServiceUser> results = repository.findAll();
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
  ResponseEntity<ServiceUser> findById(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PatchMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<ServiceUser> update(@RequestBody ServiceUser ServiceUser) {
    return Optional.ofNullable(ServiceUser)
        .filter(it -> ServiceUser.getId() != null)
        .filter(it -> repository.findById(it.getId()).isPresent())
        .map(it -> repository.save(merge(it, repository.findById(it.getId()).get())))
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping(path = "{id}")
  ResponseEntity<ServiceUser> delete(@PathVariable("id") Integer id) {
    return repository.findById(id)
        .map(it -> {
          repository.delete(it);
          return ResponseEntity.ok(it);
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
