package jpql;

import javax.persistence.Embeddable;

@Embeddable
public class Address {
    private final String city;
    private final String street;
    private final String zipcode;

    public Address() {
        city=null;
        street=null;
        zipcode=null;
    }

    public Address(String city, String street, String zipcode) {
        this.city = city;
        this.street = street;
        this.zipcode = zipcode;
    }

    public String getCity() {
        return city;
    }

    public String getStreet() {
        return street;
    }

    public String getZipcode() {
        return zipcode;
    }
}
