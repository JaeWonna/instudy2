package instudy.instudy.domain;

import javax.persistence.*;

@Entity
public class UserStudyGroup {

    @Id
    @GeneratedValue
    @Column(name = "user_study_group_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user")
    private User user; //주문 상품

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "study_group")
    private StudyGroup studyGroup; //주문

    public void setUserStudyGroup(User user) {
    }
}
