package jpql;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();
        try {
            Team team1 = new Team();
            team1.setName("teamA");
            em.persist(team1);

            Team team2 = new Team();
            team2.setName("teamB");
            em.persist(team2);

            Member member1 = new Member();
            member1.setUsername("관리자1");
            member1.changeTeam(team1);
            em.persist(member1);

            Member member2 = new Member();
            member2.setUsername("관리자2");
            member2.changeTeam(team1);
            em.persist(member2);

            Member member3 = new Member();
            member3.setUsername("관리자3");
            member3.changeTeam(team2);
            em.persist(member3);

            em.flush();
            em.clear();

            String query = "select t from Team t";
            List<Team> result = em.createQuery(query, Team.class)
                    .setFirstResult(0)
                    .setMaxResults(2)
                    .getResultList();
            result.stream().forEach(t -> {
                System.out.println("t.getName() = " + t.getName());
                t.getMembers().stream().forEach(member -> {
                    System.out.println("-  member = " + member);
                });
            });

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
