import "./styles.css";
import {NavLink} from "react-router-dom";
import{hasAnyRoles} from "util/auth"

export const Navbar = () => {
    return (
        <nav className={"admin-nav-container"}>
            <ul className={"admin-nav-content"}>
                <li>
                    <NavLink to="/admin/products" activeClassName="active" className={"admin-nav-item"}>
                        Produtos
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/categories" activeClassName="active" className={"admin-nav-item"}>
                        Categorias
                    </NavLink>
                </li>

                {hasAnyRoles(['ROLE_ADMIN']) &&
                    <li>
                        <NavLink to="/admin/users" activeClassName="active" className={"admin-nav-item"}>
                            Usuários
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    )
}