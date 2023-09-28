package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.ProductDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Product;
import br.com.joaosbarbosa.jbcatalog.repositories.ProductRepository;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.DataBaseException;
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

    @Transactional(readOnly = true)
    public Page<ProductDTO> findAllPages(PageRequest pageRequest) {
        Page<Product> list = productRepository.findAll(pageRequest);
        return list.map(x -> new ProductDTO(x, x.getCategories()));
    }

    @Transactional(readOnly = true)
    public ProductDTO searchById(Long id) {
        Optional<Product> productOptional = productRepository.findById(id);

        Product entity = productOptional.orElseThrow(()-> new ResourceNotFoundException("Objeto não localizado"));
        return new ProductDTO(entity, entity.getCategories());
    }

    @Transactional
    public ProductDTO insert(ProductDTO dto) {
        Product product = new Product();
        product.setName(dto.getName());

        productRepository.save(product);
        return new ProductDTO(product);
    }

    @Transactional
    public ProductDTO update(ProductDTO dto, Long id) {
        try {
            Product product = productRepository.getOne(id);
            product.setName(dto.getName());

            product = productRepository.save(product);
            return new ProductDTO(product);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("ID '" + id + "' não localizado");
        }
    }

    public void delete(Long id) {
        try {
            Optional<Product> product = productRepository.findById(id);

            if (product.isPresent()) {
                productRepository.deleteById(id);
            } else {
                throw new ResourceNotFoundException("ID NÃO LOCALIDADO => " + id);
            }
        } catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Violaçao de integridade");
        }
    }
}
