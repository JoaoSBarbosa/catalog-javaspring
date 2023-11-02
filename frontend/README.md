![GitHub top language](https://img.shields.io/github/languages/top/JoaoSBarbosa/catalog-javaspring) ![GitHub language count](https://img.shields.io/github/languages/count/JoaoSBarbosa/catalog-javaspring)

# CyberWolf Store Frontend - Catálogo de Loja em React ⚛️[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 

## Sobre o Projeto

O CyberWolf Store é a interface de usuário para o sistema de catálogo de produtos desenvolvido em Java com Spring Boot. Este projeto utiliza React para construir a interface e se comunica com o backend através de requisições HTTP.

## Tecnologias Utilizadas

- [React](https://reactjs.org/) [![React](https://img.shields.io/badge/React-1E90FF?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)

- [React Router](https://reactrouter.com/) [![React Router](https://img.shields.io/badge/React%20Router-008080?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/) 

- [Tailwind CSS](https://tailwindcss.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) 

- [React Hooks](https://reactjs.org/docs/hooks-state.html) [![useState e useEffect (React Hooks)](https://img.shields.io/badge/useState%20e%20useEffect%20-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/docs/hooks-state.html)

  

## Como Executar o Projeto

1. Clone o repositório do GitHub para sua máquina local.
2. Navegue até o diretório do projeto.
3. Instale as dependências utilizando o comando `npm install`.
4. Inicie a aplicação com `npm start`.

## Configuração da Conexão com o Backend

Para conectar o frontend ao backend, certifique-se de que o backend esteja em execução na porta padrão (normalmente `localhost:8080`). Caso o backend esteja em uma porta diferente, você pode configurar a URL no arquivo `src/api.js`.

```javascript
const BASE_URL = "http://localhost:8080";
