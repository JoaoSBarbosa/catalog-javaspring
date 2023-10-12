package br.com.joaosbarbosa.jbcatalog.dto;

import br.com.joaosbarbosa.jbcatalog.entities.User;

import java.io.Serializable;

public class UserInsertDTO  extends UserDTO{
    private String password;

    public void setPassword(String password){
        this.password = password;
    }

    public String getPassword(){
        return password;
    }
}
