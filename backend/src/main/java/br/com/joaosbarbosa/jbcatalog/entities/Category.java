package br.com.joaosbarbosa.jbcatalog.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "TB_CATEGORIA")
public class Category implements Serializable {
    private static final long serialVersionUID =1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cat_id")
    private Long id;
    @Column(name = "cat_name")
    private String name;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "data_criacao")
    private Date created_At;
    public Category(){}

    public Category(Long id, String name, Date createdAt) {
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

    public Date getCreatedAt() {
        return created_At;
    }

    public void setCreatedAt(Date createdAt) {
        this.created_At = createdAt;
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
