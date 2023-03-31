package instudy.instudy.repository;

import instudy.instudy.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<User, String> , UserRepository{

    Optional<User> findById(Long id);

}
