package com.example.board.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Member {

    @Id @GeneratedValue
    private Long id;

    private String userId;

    private String password;

    private String name;
}
