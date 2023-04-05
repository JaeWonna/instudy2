package instudy.instudy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class UserTodo {

    @Id
    @GeneratedValue
    @Column(name = "user_homework_id")
    private Long id;

    private String userHomeworkName;
    private String description;
    private String studyDay;

    public void setUserTodo(User user) {
    }
}
