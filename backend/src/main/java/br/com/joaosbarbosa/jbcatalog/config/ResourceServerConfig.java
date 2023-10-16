package br.com.joaosbarbosa.jbcatalog.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.util.Arrays;

@Configuration
@EnableResourceServer
public class ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Autowired
    private JwtTokenStore tokenStore;

    //Ambiente de execução da aplicação
    @Autowired
    private Environment env;

    // Define rotas públicas que não precisam de autenticação
    private static final String[] PUBLIC = {"/oauth/token","/h2-console/**"};
    // Define rotas acessíveis para usuários com perfil OPERATOR ou ADMIN
    private static final String[] OPERATOR_OR_ADMIN = {"/categorias/**", "/produtos/**"};
    // Define rotas acessíveis apenas para usuários com perfil ADMIN
    private static final String[] ADMIN = {"/users/**"};

    // Configuração para dar acesso ao token
    @Override
    public void configure(ResourceServerSecurityConfigurer resource) throws Exception {
        resource.tokenStore(tokenStore);
    }

    // configuração das rotas
    @Override
    public void configure(HttpSecurity http) throws Exception {

        //comando para liberar o H2
        if(Arrays.asList(env.getActiveProfiles()).contains("test")){
            http.headers().frameOptions().disable();
        }
        http.authorizeRequests()
                .antMatchers(PUBLIC).permitAll()//Para rotas PUBLIC, está liberado acessos
                .antMatchers(HttpMethod.GET, OPERATOR_OR_ADMIN).permitAll()// Permite acesso liberado de leitura(GET)
                .antMatchers(OPERATOR_OR_ADMIN).hasAnyRole("OPERATOR", "ADMIN")// Permite acesso apenas para OPERATOR e ADMIN
                .antMatchers(ADMIN).hasAnyRole("ADMIN")// Permite acesso apenas para ADMIN
                .anyRequest().authenticated();// Todas as outras rotas requerem autenticação(LOGIN)
    }
}
