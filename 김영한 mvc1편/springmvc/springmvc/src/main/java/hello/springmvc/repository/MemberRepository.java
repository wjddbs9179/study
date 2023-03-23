package hello.springmvc.repository;

import hello.springmvc.domain.Member;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MemberRepository {
    private static MemberRepository instance = new MemberRepository();
    private Map<Long , Member> store = new HashMap<>();
    private Long sequence = 0L;

    private MemberRepository(){}

    public static MemberRepository getInstance(){
        return instance;
    }

    public void save(Member member) {
        member.setId(++sequence);
        store.put(member.getId(),member);
    }

    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }
}
