package hello.springmvc.v3;

import hello.springmvc.domain.Member;
import hello.springmvc.repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
@Controller
@RequestMapping("/springmvc/v3/members/")
public class SpringMemberControllerV3 {

    private final MemberRepository memberRepository = MemberRepository.getInstance();

    @GetMapping
    public String members(Model model){
        List<Member> members = memberRepository.findAll();
        model.addAttribute("members",members);
        return "members";
    }

    @PostMapping("save")
    public String save(@RequestParam String username, @RequestParam int age, Model model){
        Member member = new Member(username,age);
        memberRepository.save(member);

        model.addAttribute("member",member);
        return "save-result";
    }

    @GetMapping("new-form")
    public String newForm(){
        return "new-form";
    }
}
