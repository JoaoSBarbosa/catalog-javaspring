package br.com.joaosbarbosa.jbcatalog.resources.exceptions;

import java.util.ArrayList;
import java.util.List;

public class ValidationError extends StandardError{

    private List<FieldMessage> fieldMessageList = new ArrayList<>();

    public List<FieldMessage> getFieldMessageList() {
        return fieldMessageList;
    }

   public void addError(String fieldName, String message){
    fieldMessageList.add(new FieldMessage(fieldName, message));
   }
}
