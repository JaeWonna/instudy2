package instudy.instudy.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class StudyGroupHomework {

    @Id
    @GeneratedValue
    @Column(name = "study_group_homework_id")
    private Long id;

    private String studyGroupHomeworkName;
    private String description;
    private String studyDay;
}
