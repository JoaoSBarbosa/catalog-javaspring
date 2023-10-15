package br.com.joaosbarbosa.jbcatalog.config;

import br.com.joaosbarbosa.jbcatalog.components.JwtTokenEnhancer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.TokenEnhancerChain;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;

import java.util.Arrays;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

    @Value("${security.oauth2.client.client-id}")
    private String clientId;
    @Value("${security.oauth2.client.client-secret}")
    private String clientSecret;
    @Value("${jwt.duration}")
    private Integer jwtDuration;

    @Autowired BCryptPasswordEncoder passwordEncoder;
    @Autowired JwtAccessTokenConverter accessTokenConverter;
    @Autowired JwtTokenStore tokenStore;
    @Autowired AuthenticationManager authenticationManager;

    @Autowired private JwtTokenEnhancer tokenEnhancer;
    // Configura as permissões de acesso aos endpoints de geração e validação de tokens
    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.tokenKeyAccess("permitAll()").checkTokenAccess("isAuthenticated()");
    }

    // Configura as informações do cliente (nome, senha, escopos, tipo de concessão, etc.)
    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(clientId) // Nome da aplicação que solicitará acesso
                .secret(passwordEncoder.encode(clientSecret)) // Senha para acessar a aplicação
                .scopes("read", "write") // Escopos de acesso (leitura, escrita, etc.)
                .authorizedGrantTypes("password") // Padrão de concessão de token
                .accessTokenValiditySeconds(jwtDuration); // Tempo de validade do token (24 horas)
    }

    // Configura os endpoints para autenticação e o formato do token
    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {

        TokenEnhancerChain chain = new TokenEnhancerChain();
        chain.setTokenEnhancers(Arrays.asList(accessTokenConverter,tokenEnhancer));

        endpoints.authenticationManager(authenticationManager) // Gerenciador de autenticação
                .tokenStore(tokenStore) // Armazenamento do token
                .accessTokenConverter(accessTokenConverter) // Conversor de token
                .tokenEnhancer(chain);
    }
}
