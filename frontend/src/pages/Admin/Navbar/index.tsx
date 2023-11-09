import "./styles.css";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={"admin-nav-container"}>
            <ul className={"admin-nav-content"}>
                <li>
                    <a href="/" className={"admin-nav-item active"}>
                        Produtos
                    </a>
                </li>
                <li>
                    <a href="/" className={"admin-nav-item"}>
                        Categorias
                    </a>
                </li>
                <li>
                    <a href="/" className={"admin-nav-item"}>
                        Usuários
                    </a>
                </li>
            </ul>
        </nav>
    )
}