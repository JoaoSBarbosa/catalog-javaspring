package br.com.joaosbarbosa.jbcatalog.repositories;

import br.com.joaosbarbosa.jbcatalog.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {
}
