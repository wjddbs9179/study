package com.example.board.repository;

import com.example.board.Entity.Board;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class BoardRepository {

    private EntityManager em;

    public void save(Board board){
        em.persist(board);
    }

}
