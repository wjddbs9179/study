package com.example.board.controller.member;

import com.example.board.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member/")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("login")
    public String login(Model model){
        model.addAttribute();
        return "member/login";
    }
}
