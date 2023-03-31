package instudy.instudy.service;

import instudy.instudy.domain.User;
import instudy.instudy.repository.UserRepository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String Join(User user) {
        validateDuplicateMember(user);//중복 회원 검증
        userRepository.save(user);
        return user.getId();
    }


    private void validateDuplicateMember(User user) {
        userRepository.findById(user.getId())
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }


}
