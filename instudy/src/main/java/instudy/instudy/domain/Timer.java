package instudy.instudy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Timer {

    @Id
    @GeneratedValue
    @Column(name = "timer_id")
    private Long id;

    private int StudyTime;
}
