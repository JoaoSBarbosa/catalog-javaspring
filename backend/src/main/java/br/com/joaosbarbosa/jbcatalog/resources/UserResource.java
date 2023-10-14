package br.com.joaosbarbosa.jbcatalog.resources;


import br.com.joaosbarbosa.jbcatalog.dto.UserDTO;
import br.com.joaosbarbosa.jbcatalog.dto.UserInsertDTO;
import br.com.joaosbarbosa.jbcatalog.dto.UserUpdateDTO;
import br.com.joaosbarbosa.jbcatalog.entities.User;
import br.com.joaosbarbosa.jbcatalog.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/users")
public class UserResource {

    @Autowired
    UserService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable long id){
        UserDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping
   public ResponseEntity<Page<UserDTO>> findAllPages(Pageable pageable){
        Page<UserDTO> pageList = service.findAllPageable(pageable);
        return ResponseEntity.ok().body(pageList);
   }

   @PostMapping
   public ResponseEntity<UserDTO> insert(@Valid @RequestBody UserInsertDTO dto){
       UserDTO newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
   }

   @PutMapping(value = "/{id}")
   public ResponseEntity<UserDTO> update(@Valid @RequestBody UserUpdateDTO dto, @PathVariable long id){
        UserDTO updatDto = service.update(dto, id);
        return ResponseEntity.ok().body(updatDto);
   }

   @DeleteMapping(value = "/{id}")
   public  ResponseEntity<Void> delet(@PathVariable long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
   }
}
