package ru.shestakova.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import ru.shestakova.model.BankTheme;

public interface BankThemeRepository extends JpaRepository<BankTheme, Integer>, QuerydslPredicateExecutor<BankTheme> {

}
