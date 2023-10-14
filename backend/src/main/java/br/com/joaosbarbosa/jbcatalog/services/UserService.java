package br.com.joaosbarbosa.jbcatalog.services;

import br.com.joaosbarbosa.jbcatalog.dto.RoleDTO;
import br.com.joaosbarbosa.jbcatalog.dto.UserDTO;
import br.com.joaosbarbosa.jbcatalog.dto.UserInsertDTO;
import br.com.joaosbarbosa.jbcatalog.dto.UserUpdateDTO;
import br.com.joaosbarbosa.jbcatalog.entities.Role;
import br.com.joaosbarbosa.jbcatalog.entities.User;
import br.com.joaosbarbosa.jbcatalog.repositories.RoleRepository;
import br.com.joaosbarbosa.jbcatalog.repositories.UserRepository;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.DataBaseException;
import br.com.joaosbarbosa.jbcatalog.services.exceptions.ResourceNotFoundException;

import javax.persistence.EntityNotFoundException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

//import javax.persistence.EntityNotFoundException;
//import javax.transaction.TransactionScoped;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    private static Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    UserRepository repository;
    @Autowired
    RoleRepository roleRepository;

    @Transactional(readOnly = true)
    public Page<UserDTO> findAllPageable(Pageable pageable) {
//        salvando todos os user em uma Page
        Page<User> entityList = repository.findAll(pageable);

        return entityList.map((x) -> new UserDTO(x));
    }

    @Transactional(readOnly = true)
    public UserDTO findById(Long id) {
        Optional<User> optionalUser = repository.findById(id);

        User entity = optionalUser.orElseThrow(() -> new ResourceNotFoundException("Objeto não localizado"));
        return new UserDTO(entity);
    }

    @Transactional
    public UserDTO insert(UserInsertDTO dto) {
        User entity = new User();
        copyDtoToEntity(entity, dto);
        entity.setPassword(passwordEncoder.encode(dto.getPassword()));
        entity = repository.save(entity);
        return new UserDTO(entity);
    }

    @Transactional
    public UserDTO update(UserUpdateDTO dto, long id) {
        try {
            User entity = repository.getOne(id);
            copyDtoToEntity(entity, dto);

            entity = repository.save(entity);
            return new UserDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("ID '" + id + "' não localizado");
        }
    }

    @Transactional
    public void delete(long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("ID não encontrado" + id);
        } catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Violação de integridade");
        }
    }

    private void copyDtoToEntity(User entity, UserDTO dto) {
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setEmail(dto.getEmail());

        // Limpa a lista de funções do usuário (roles)
        entity.getRoles().clear();

        // Para cada RoleDTO presente em dto.getRoles()
        for (RoleDTO roleDTO : dto.getRoles()) {
            // Obtém a Role correspondente ao ID do RoleDTO
            Role role = roleRepository.getOne(roleDTO.getId());

            // Adiciona a Role à lista de funções do usuário
            entity.getRoles().add(role);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repository.findByEmail(username);

        if(user == null ){
            logger.error("User não encontrado: " + username);
            throw new UsernameNotFoundException("Email not found");
        }
        logger.info("User found: "+username);
        return user;
    }
}
