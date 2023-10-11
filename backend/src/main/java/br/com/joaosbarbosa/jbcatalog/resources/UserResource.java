package br.com.joaosbarbosa.jbcatalog.resources;


import br.com.joaosbarbosa.jbcatalog.dto.UserDTO;
import br.com.joaosbarbosa.jbcatalog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserResource {

    @Autowired
    UserService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable long id){
        UserDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }
}
