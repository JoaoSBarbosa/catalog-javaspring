package br.com.joaosbarbosa.jbcatalog.entities;

import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "tb_category")
public class Category implements Serializable {
    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant created_At;

    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private Instant updatedAt;


    @ManyToMany(mappedBy = "categories")
    private Set<Product> products = new HashSet<>();

    // Getter para products
    public Set<Product> getProducts() {
        return products;
    }
    public Category(){}

    public Category(Long id, String name, Instant createdAt) {
        this.id = id;
        this.name = name;
        this.created_At = createdAt;
    }

    public Category(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Instant getCreatedAt() {
        return created_At;
    }

    public void setCreatedAt(Instant createdAt) {
        this.created_At = createdAt;
    }


    @PreUpdate
    public void preUpdate(){
        updatedAt = Instant.now();
    }

    @PrePersist
    public void prePersist(){
        created_At = Instant.now();
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Category category)) return false;
        return Objects.equals(getId(), category.getId()) && Objects.equals(getName(), category.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getName());
    }
}
