package jpql;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");

        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();
        //code
        try {
            Team teamA = new Team();
            teamA.setName("teamA");
            em.persist(teamA);
            Team teamB = new Team();
            teamB.setName("teamB");
            em.persist(teamB);
            Team teamC = new Team();
            teamC.setName("teamC");
            em.persist(teamC);

            Member member1 = new Member();
            member1.setUsername("회원1");
            member1.changeTeam(teamA);

            Member member2 = new Member();
            member2.setUsername("회원2");
            member2.changeTeam(teamA);

            Member member3 = new Member();
            member3.setUsername("회원3");
            member3.changeTeam(teamB);

            Member member4 = new Member();
            member4.setUsername("회원4");

            em.persist(member1);
            em.persist(member2);
            em.persist(member3);
            em.persist(member4);

            int resultCount = em.createQuery("update Member m set m.age = 20")
                    .executeUpdate();
            em.clear();
            member1 = em.find(Member.class,member1.getId());
            member2 = em.find(Member.class,member2.getId());
            member3 = em.find(Member.class,member3.getId());
            member4 = em.find(Member.class,member4.getId());

            System.out.println("member1.getAge() = " + member1.getAge());
            System.out.println("member2.getAge() = " + member2.getAge());
            System.out.println("member3.getAge() = " + member3.getAge());
            System.out.println("member4.getAge() = " + member4.getAge());

            System.out.println("resultCount = " + resultCount);

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            e.printStackTrace();
        } finally {
            em.close();
        }
        emf.close();
    }
}
