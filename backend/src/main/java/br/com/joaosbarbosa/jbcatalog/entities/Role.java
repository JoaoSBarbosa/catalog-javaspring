package br.com.joaosbarbosa.jbcatalog.entities;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "tb_role")
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String authority;


    public Role(){}

    public Role(long id, String authority){
        this.id = id;
        this.authority = authority;

    }

    public void setId(long id){
        this.id = id;
    }

    public long getId(){
        return id;
    }

    public void setAuthority(String authority){
        this.authority = authority;
    }

    public String getAuthority(){
        return authority;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Role role)) return false;
        return Objects.equals(getId(), role.getId()) && Objects.equals(getAuthority(), role.getAuthority());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getAuthority());
    }
}
