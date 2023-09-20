package br.com.joaosbarbosa.jbcatalog.resources;


import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/categorias")
public class CategoryResource {

    @Autowired
    private CategoryService categoryService;

    //ResponseEntity é um objeto do tipo genérico<> Spring responsável por encapsular resposta HTTP
    @GetMapping
    public ResponseEntity<List<Category>> findAll(){ //
        List<Category> list =  categoryService.findAll();
         return ResponseEntity.ok().body(list);
    }

}
