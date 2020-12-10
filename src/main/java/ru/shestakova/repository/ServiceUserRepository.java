package ru.shestakova.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.shestakova.model.ServiceUser;

@Repository
public interface ServiceUserRepository extends JpaRepository<ServiceUser, Integer> {

  Optional<ServiceUser> findByName(String username);
}
