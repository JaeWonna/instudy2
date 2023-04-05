package instudy.instudy.domain;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
    // 회원

    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long user_id;

    private String id;
    private String password;
    private String userName;
    private String email;

    @OneToMany(mappedBy = "user")
    private List<UserStudyGroup> userStudyGroups = new ArrayList<>();
    // 회원그룹 (중간 매핑 테이블) 매핑 1:n

    @OneToMany(mappedBy = "user")
    private List<UserTodo> userTodos = new ArrayList<>();
    // 개인 to-do 매핑 1:n

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "calender_id")
    private Calender calender;
    // 캘린더 매핑 1:1

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "timer_id")
    private Timer timer;
    // 타이머 매핑 1:1

    @OneToMany(mappedBy = "user")
    private List<Diary> diaries = new ArrayList<>();
    // 공유일기 매핑 1:n



    public void addUserStudyGroup(UserStudyGroup userStudyGroup) {
        userStudyGroups.add(userStudyGroup);
        userStudyGroup.setUserStudyGroup(this);
    }
    // 위의 private로 선언한 userStudyGroups (팀 공동과제)에 userStudyGroup을 추가할 수 있다

    public void addUserTodo(UserTodo userTodo) {
        userTodos.add(userTodo);
        userTodo.setUserTodo(this);
    }
    // 위의 private로 선언한 UserTodo (개인 to-do)에 UserTodo을 추가할 수 있다

    public void setCalender(Calender calender) {
        this.calender = calender;
        calender.setCalender(this);
    }
    // 위의 private로 선언한 Calender (캘린더)를 의존한다

    public void setDelivery(Delivery delivery) {
        this.delivery = delivery;
        delivery.setOrder(this);
    }


    public void addDiary(OrderItem orderItem) {
        orderItems.add(orderItem);
        orderItem.setOrder(this);
    }




    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
