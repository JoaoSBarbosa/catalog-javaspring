package br.com.joaosbarbosa.jbcatalog.resources;

import br.com.joaosbarbosa.jbcatalog.dto.ProductDTO;
import br.com.joaosbarbosa.jbcatalog.services.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/produtos")
public class ProductResource {

    @Autowired private ProductService productService;

    @PostMapping
    public ResponseEntity<ProductDTO> insert(@Valid @RequestBody ProductDTO dto){
        dto = productService.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<ProductDTO> searchById(@PathVariable Long id){
        ProductDTO productDTO = productService.searchById(id);
        return ResponseEntity.ok().body(productDTO);
    }

    @GetMapping
    public ResponseEntity<Page<ProductDTO>> searchAllPages(Pageable pageable){
        Page<ProductDTO> list  = productService.findAllPages(pageable);

        return ResponseEntity.ok().body(list);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<ProductDTO> update(@Valid @RequestBody ProductDTO dto, @PathVariable Long id){
        dto = productService.update(dto, id);
        return ResponseEntity.ok().body(dto);
    }
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
