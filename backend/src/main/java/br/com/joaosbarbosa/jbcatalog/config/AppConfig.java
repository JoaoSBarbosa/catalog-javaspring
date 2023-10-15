package br.com.joaosbarbosa.jbcatalog.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

@Configuration
public class AppConfig  {

    @Value("${jwt.secret}")
    private String jwtSecret;
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    //Objetos para ler token jwt(ler,criar,acessar)
    @Bean
    public JwtAccessTokenConverter accessTokenConverter(){
        //instanciando objeto
        JwtAccessTokenConverter tokenConverter = new JwtAccessTokenConverter();
        //registrando a chave do token
        tokenConverter.setSigningKey(jwtSecret);
        //retornando o token
        return tokenConverter;
    }
    @Bean
    public JwtTokenStore tokenStore(){
        return new JwtTokenStore(accessTokenConverter());
    }
}
