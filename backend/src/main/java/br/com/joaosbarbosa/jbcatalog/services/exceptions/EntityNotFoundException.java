package br.com.joaosbarbosa.jbcatalog.services.exceptions;

public class EntityNotFoundException extends RuntimeException {
    public EntityNotFoundException(String Message) {
        super(Message);
    }
}
