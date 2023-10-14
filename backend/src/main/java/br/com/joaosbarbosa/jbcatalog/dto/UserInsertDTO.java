package br.com.joaosbarbosa.jbcatalog.dto;

import br.com.joaosbarbosa.jbcatalog.entities.User;
import br.com.joaosbarbosa.jbcatalog.services.validation.UserInsertValid;

import java.io.Serializable;

@UserInsertValid
public class UserInsertDTO  extends UserDTO{
    private String password;

    public void setPassword(String password){
        this.password = password;
    }

    public String getPassword(){
        return password;
    }
}
