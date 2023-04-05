package instudy.instudy.controller;

import instudy.instudy.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@Controller
public class GroupController {

    private final GroupService groupService;

    @Autowired
    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

//    @RequestMapping(value = "/group", method = RequestMethod.POST)
//    public void createForm(@RequestBody Map<String, String> ParamMap) {
//        System.out.println("aaaaaaaasdasdasdasdasd");
//        System.out.println(ParamMap);
//    }





}
