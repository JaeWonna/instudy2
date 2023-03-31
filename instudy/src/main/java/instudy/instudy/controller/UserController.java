package instudy.instudy.controller;

import instudy.instudy.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void createForm(@RequestBody Map<String, String> ParamMap) {
        System.out.println("aaaaaaaasdasdasdasdasd");
        System.out.println(ParamMap);
    }

    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    public void signin(@RequestBody Map<String, String> ParamMap) {
        System.out.println("로그인 테스트");
        System.out.println(ParamMap);
    }

//
//    @PostMapping("/signUp")
//    public String create(MemberForm form) {
//
//        Member member = new Member();
//        member.setName(form.getName());
//
//        memberService.join(member);
//
//        return "redirect:/";
//    }
//
//    @GetMapping("/members")
//    public String list(Model model) {
//        List<Member> members = memberService.findMembers();
//        model.addAttribute("members", members);
//        return "members/memberList";
//    }


}
