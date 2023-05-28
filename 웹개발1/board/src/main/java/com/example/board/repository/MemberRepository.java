package com.example.board.repository;

import com.example.board.Entity.Member;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MemberRepository {

    private EntityManager em;

    public void save(Member member){
        em.persist(member);
    }
}
