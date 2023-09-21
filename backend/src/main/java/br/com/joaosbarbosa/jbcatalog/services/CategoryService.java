package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.CategoryDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public List<CategoryDTO> findAll(){
          List<Category> list =  categoryRepository.findAll();
//        List<CategoryDTO> listDto = new ArrayList<>();
//        for(Category cat : list){
//            listDto.add(new CategoryDTO(cat));
//        }
//        return  listDto;

        return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
    }
}
