package com.example.board.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Board {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String content;
    private String password;
}
