package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> findAll(){
       return categoryRepository.findAll();
    }
}
