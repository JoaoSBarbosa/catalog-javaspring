package br.com.joaosbarbosa.jbcatalog.resources;
import br.com.joaosbarbosa.jbcatalog.dto.CategoryDTO;
import br.com.joaosbarbosa.jbcatalog.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/categorias")
public class CategoryResource {

    @Autowired
    private CategoryService categoryService;

    //ResponseEntity é um objeto do tipo genérico<> Spring responsável por encapsular resposta HTTP
    @GetMapping
    public ResponseEntity<List<CategoryDTO>> findAll(){ //
        List<CategoryDTO> list =  categoryService.findAll();
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<CategoryDTO> searchById(@PathVariable long id){
        CategoryDTO categoryDTO = categoryService.searchById(id);
        return ResponseEntity.ok().body(categoryDTO);
    }


}
