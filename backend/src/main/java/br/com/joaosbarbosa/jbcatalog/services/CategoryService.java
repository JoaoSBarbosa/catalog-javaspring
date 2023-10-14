package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.CategoryDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.repositories.CategoryRepository;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.DataBaseException;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.ResourceNotFoundException;
import javax.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired private CategoryRepository categoryRepository;

    @Transactional(readOnly = true)
    public Page<CategoryDTO> findAllPages(Pageable pageable) {
        Page<Category> list = categoryRepository.findAll(pageable);
        return list.map(x -> new CategoryDTO(x));
    }

    @Transactional(readOnly = true)
    public CategoryDTO searchById(Long id) {
        Optional<Category> categoriaOptional = categoryRepository.findById(id);
        return new CategoryDTO(categoriaOptional.orElseThrow(() -> new ResourceNotFoundException("Objeto não localizado")));
    }

    @Transactional
    public CategoryDTO insert(CategoryDTO dto) {
        Category category = new Category();
        category.setName(dto.getName());

        categoryRepository.save(category);
        return new CategoryDTO(category);
    }

    @Transactional
    public CategoryDTO update(CategoryDTO dto, Long id) {
        try {
            Category category = categoryRepository.getOne(id);
            category.setName(dto.getName());

            category = categoryRepository.save(category);
            return new CategoryDTO(category);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("ID '" + id + "' não localizado");
        }
    }

    public void delete(Long id) {
        try {
            Optional<Category> category = categoryRepository.findById(id);

            if (category.isPresent()) {
                categoryRepository.deleteById(id);
            } else {
                throw new ResourceNotFoundException("ID NÃO LOCALIDADO => " + id);
            }
        } catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Violaçao de integridade");
        }
    }
}
