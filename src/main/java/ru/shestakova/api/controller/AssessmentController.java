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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.shestakova.model.Assessment;
import ru.shestakova.model.Assessment.Id;
import ru.shestakova.model.ServiceUser;
import ru.shestakova.model.TextWork;
import ru.shestakova.model.type.AssentMarkType;
import ru.shestakova.repository.AssessmentRepository;
import ru.shestakova.repository.TextWorkRepository;
import ru.shestakova.repository.filter.AssessmentFilter;

@CrossOrigin
@RestController
@RequestMapping(
    path = "/assessments"
)
@AllArgsConstructor
public class AssessmentController {

  private final AssessmentRepository repository;

  private final TextWorkRepository textWorkRepository;

  @PostMapping(
      path = "create",
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<Assessment> create(@RequestBody Assessment assessment) {
    assessment = repository.save(assessment);

    if (assessment.getMark().getType() == AssentMarkType._1) {
      TextWork textWork = textWorkRepository.findById(assessment.getId().getTextWork().getId()).get();
      textWork.setRating(textWork.getRating() + 1);

      textWork = textWorkRepository.save(textWork);
      assessment.getId().setTextWork(textWork);
    }

    return ResponseEntity.ok(assessment);
  }

  @PostMapping(
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<List<Assessment>> find(@RequestBody(required = false) AssessmentFilter filter) {
    final List<Assessment> results = repository.findAllByFilter(filter);
//    final List<TextWork> results = repository.findAll();
    if (results.isEmpty()) {
      return ResponseEntity.notFound().build();
    } else {
      return ResponseEntity.ok(results);
    }
  }

  @GetMapping(
      consumes = MediaType.ALL_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<Assessment> findById(
      @RequestParam("authorId") Integer authorId,
      @RequestParam("workId") Integer workId
  ) {
    final ServiceUser user = new ServiceUser();
    user.setId(authorId);

    final TextWork work = new TextWork();
    work.setId(workId);

    final Id id = new Id(user, work);

    return repository.findById(id)
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @PatchMapping(
      consumes = MediaType.APPLICATION_JSON_VALUE,
      produces = MediaType.APPLICATION_JSON_VALUE
  )
  ResponseEntity<Assessment> update(@RequestBody Assessment assessment) {
    return Optional.ofNullable(assessment)
        .filter(it -> assessment.getId() != null)
        .filter(it -> repository.findById(it.getId()).isPresent())
        .map(it -> repository.save(merge(it, repository.findById(it.getId()).get())))
        .map(ResponseEntity::ok)
        .orElse(ResponseEntity.notFound().build());
  }

  @DeleteMapping
  ResponseEntity<Assessment> delete(
      @RequestParam("authorId") Integer authorId,
      @RequestParam("workId") Integer workId
  ) {
    final ServiceUser user = new ServiceUser();
    user.setId(authorId);

    final TextWork work = new TextWork();
    work.setId(workId);

    final Id id = new Id(user, work);

    return repository.findById(id)
        .map(it -> {
          repository.delete(it);
          return ResponseEntity.ok(it);
        })
        .orElse(ResponseEntity.notFound().build());
  }
}
