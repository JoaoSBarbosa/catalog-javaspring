package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.CategoryDTO;
import br.com.joaosbarbosa.jbcatalog.dto.ProductDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Category;
import br.com.joaosbarbosa.jbcatalog.entities.Product;
import br.com.joaosbarbosa.jbcatalog.repositories.ProductRepository;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Transactional
    public ProductDTO insert(ProductDTO dto){
        Product product = new Product();
        product.setName(dto.getName());
        product.setDate(dto.getDate());
        product.setDescription(dto.getDescription());
        product.setId(dto.getId());
        product.setImgUrl(dto.getImgUrl());
        product.setPrice(dto.getPrice());

        productRepository.save(product);
        return new ProductDTO(product);
    }

    @Transactional(readOnly = true)
    public Page<ProductDTO> findAllPages(PageRequest pageRequest){
        Page<Product> categoryPage = productRepository.findAll(pageRequest);
        return categoryPage.map(item -> new ProductDTO(item));
    }
    @Transactional(readOnly = true)
    public ProductDTO findById(Long id){
        Optional<Product> optionalProduct = productRepository.findById(id);
        Product entity = optionalProduct.orElseThrow(()-> new ResourceNotFoundException("Entidade não localizada"));
        return new ProductDTO(entity, entity.getCategories());
    }

    @Transactional
    public ProductDTO update(ProductDTO dto, Long id){
        try {
            Product product = productRepository.getOne(id);
            product.setName(dto.getName());
            product.setPrice(dto.getPrice());
            product.setDate(dto.getDate());
            product.setDescription(dto.getDescription());
            product.setImgUrl(dto.getImgUrl());

            product = productRepository.save(product);

            return new ProductDTO(product);
        }catch (EntityNotFoundException e){

        }throw  new ResourceNotFoundException("Objeto não localidado através do id '"+id+"'");
    }

    public void delete(Long id){
        try{
            Optional<Product> optionalProduct = productRepository.findById(id);
            if(optionalProduct.isPresent()){
                productRepository.deleteById(id);
            }else {
                throw  new ResourceNotFoundException("Nenhum produto localizado com o id '"+id+"'");
            }

        }catch (DataIntegrityViolationException e){
            throw  new ResourceNotFoundException("Violação de integridade");
        }
    }
}
