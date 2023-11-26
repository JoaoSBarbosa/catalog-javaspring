import "./styles.css";
import {Route, Switch} from "react-router-dom";
import {Form} from "./Form";
import {List} from "./List";


/**
 * Componente Products:
 *
 * Este componente define as rotas relacionadas aos produtos na área de administração.
 * Utiliza o React Router para alternar entre a exibição da lista de produtos e o formulário de produto.
 *
 * Rota 1:
 * - Caminho: "/admin/products"
 * - Componente: List (Lista de produtos)
 * - Acessado ao navegar para "/admin/products"
 *
 * Rota 2:
 * - Caminho: "/admin/products/:productId"
 * - Componente: Form (Formulário de produto)
 * - Acessado ao navegar para "/admin/products/{id}" onde {id} é o identificador do produto
 *
 * @returns {JSX.Element} - Elemento JSX que representa as rotas relacionadas aos produtos na área de administração.
 */
export const Products = () => {
    return (
        <div>
            <Switch>
                {/* Rota para exibir a lista de produtos */}
                <Route exact path={"/admin/products"}>
                    <List/>
                </Route>

                {/* Rota para exibir o formulário de produto */}
                <Route path={"/admin/products/:productId"}>
                    <Form/>
                </Route>
            </Switch>
        </div>
    );
}