package instudy.instudy.controller;

import instudy.instudy.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class UserController {

    private final UserService userService;


    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/signup")
    public void createForm(@RequestParam Long id, @RequestParam String password) {
        System.out.println("aaaaaaaasdasdasdasdasd"+id);
        System.out.println(password);
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
