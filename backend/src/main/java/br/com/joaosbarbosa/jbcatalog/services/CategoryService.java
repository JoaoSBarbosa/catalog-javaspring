package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.CategoryDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.repositories.CategoryRepository;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

    @Transactional(readOnly = true)
    public CategoryDTO searchById(Long id){
        Optional<Category> categoriaOptional = categoryRepository.findById(id);
        return new CategoryDTO(categoriaOptional.orElseThrow(()-> new EntityNotFoundException("Objeto não localizado")));
    }
    public CategoryDTO insert(CategoryDTO dto){
        Category category = new Category();
        category.setName(dto.getName());

        category = categoryRepository.save(category);
        return new CategoryDTO(category);

    }



}
