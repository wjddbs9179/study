package hellojpa;

import org.hibernate.Hibernate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

public class JpaMain {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("hello");
        EntityManager em = emf.createEntityManager();

        EntityTransaction tx = em.getTransaction();
        tx.begin();
        try {

            Member member = new Member();
            member.setUsername("member1");
            member.setHomeAddress(new Address("homeCity","street","10000"));

            member.getFavoriteFoods().add("치킨");
            member.getFavoriteFoods().add("족발");
            member.getFavoriteFoods().add("피자");

            member.getAddressesHistory().add(new AddressEntity("old1","street","10000"));
            member.getAddressesHistory().add(new AddressEntity("old2","street","10000"));

            em.persist(member);

            em.flush();
            em.clear();

            Member findMember = em.find(Member.class, member.getId());

            System.out.println("findMember.getUsername() = " + findMember.getUsername());

            member.getFavoriteFoods().stream().forEach(food-> System.out.println("food = " + food));
            member.getAddressesHistory().stream().forEach(address -> System.out.println("address = " + address));

            findMember.getFavoriteFoods().remove("치킨");
            findMember.getFavoriteFoods().add("한식");

            findMember.getAddressesHistory().remove(new AddressEntity("old1","street","10000"));
            findMember.getAddressesHistory().add(new AddressEntity("newCity1","street","10000"));

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
