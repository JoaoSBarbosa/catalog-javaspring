import {Redirect, Route} from 'react-router-dom';
import {Role} from "../../util/auth";
import{hasAnyRoles,isAuthenticated} from "util/auth"

/**
 * Componente PrivateRoute:
 *
 * Este componente cria uma rota privada, garantindo que apenas usuários autenticados e com a função de admin
 * tenham acesso a determinadas rotas. Caso o usuário não esteja autenticado, ele é redirecionado para a página de login.
 * Se autenticado, mas sem a função de admin, é redirecionado para a página de produtos. Caso contrário, renderiza os filhos.
 *
 * @param {React.ReactNode} children - Componentes a serem renderizados dentro da rota privada.
 * @param {string} path - Caminho da rota privada.
 */
type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Role[]
};


const PrivateRoute = ({children, path, roles=[]}: Props) => {

    return (
        <Route
            path={path}
            render={({ location }) =>
                !isAuthenticated() ? (
                    // Redireciona para a página de login se o usuário não estiver autenticado.
                    <Redirect
                        to={{
                            pathname: "/admin/auth/login",
                            state: { from: location }
                        }}
                    />
                ) : (
                    !hasAnyRoles(roles) ? (
                        // Redireciona para a página de produtos se o usuário não tiver a função de admin.
                        <Redirect to={"/admin/products"} />
                    ) : (
                        // Renderiza os filhos se o usuário estiver autenticado e tiver a função de admin.
                        children
                    )
                )
            }
        />
    );
};



export default PrivateRoute;