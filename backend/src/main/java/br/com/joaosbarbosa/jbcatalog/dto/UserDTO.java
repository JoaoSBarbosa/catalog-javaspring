package br.com.joaosbarbosa.jbcatalog.dto;

import br.com.joaosbarbosa.jbcatalog.entities.Role;
import br.com.joaosbarbosa.jbcatalog.entities.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private long id;
    @Size(min = 5, max = 20, message = "O campo permite no mínimo 5 e máximo 20 caracteres")
    @NotBlank(message = "Este campo é obrigatório")
    private String firstName;
    @NotBlank(message = "Este campo é obrigatório")
    private String lastName;
    @Email(message = "Por favor, insira um email válido")
    private String email;

    //Senha não adicionada porque não faz sentido transitá-la no DTO


//    Para transitar no Json os dados do usuarios e suas permisões
    Set<RoleDTO> roles = new HashSet<>();
    public UserDTO() {
    }

    public UserDTO(User entity) {
        id = entity.getId();
        firstName = entity.getFirstName();
        lastName = entity.getLastName();
        email = entity.getEmail();
        //pegando a lista de roles que já vem no user
        entity.getRoles().
                //percorendo a lista. Para cada regra que veio, adiciona na lista roles
                forEach(role -> this.roles.
                        // instanciando um RoleDTO que será adicionado na lista role
                        add(new RoleDTO(role)));
    }



    public UserDTO(long id, String firstName, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<RoleDTO> getRoles(){
        return roles;
    }
}
