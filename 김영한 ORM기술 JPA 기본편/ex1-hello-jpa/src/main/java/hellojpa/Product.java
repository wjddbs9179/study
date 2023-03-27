package hellojpa;

import javax.persistence.*;
import java.util.List;

@Entity
public class Product {

    @Id @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "product")
    private List<MemberProduct> memberProducts;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
