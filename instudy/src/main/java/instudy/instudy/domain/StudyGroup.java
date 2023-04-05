package instudy.instudy.domain;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class StudyGroup {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long groupId;
    private String groupName;
    private String description;
    private Long fixedNumber;
    private Long currentNumber;

    @OneToMany(mappedBy = "study_group")
    private List<UserStudyGroup> UserStudyGroup = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "study_group_homework_id")
    private StudyGroupHomework studyGroupHomework;



    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Long getFixedNumber() {
        return fixedNumber;
    }

    public void setFixedNumber(Long fixedNumber) {
        this.fixedNumber = fixedNumber;
    }

    public Long getCurrentNumber() {
        return currentNumber;
    }

    public void setCurrentNumber(Long currentNumber) {
        this.currentNumber = currentNumber;
    }
}
