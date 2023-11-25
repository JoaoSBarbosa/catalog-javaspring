import {Link, NavLink} from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import logo from "assets/images/logo-cyber2.png";
import {getTokenData, isAuthenticated, removeAuthDataToLocalStorage} from "../../util/request";
import {useContext, useEffect} from "react";
import history from "../../util/history";
import {AuthContext} from "../../AuthContext";
import {Crown, SignOut} from "@phosphor-icons/react";

export const NavBar = () => {

    const{authContextData, setAuthContextData} = useContext(AuthContext);

    // const [authData, setAuthData] = useState<AuthContextData>(
    //     {
    //         authenticated: false
    //     }
    // )

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            });
        } else {
            setAuthContextData({
                authenticated: false
            })
        }

    }, [setAuthContextData]);

    const handleLogoutAfterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthDataToLocalStorage();
        setAuthContextData({
            authenticated: false
        });

        history.replace("/")
    }

    const handleLoginAfterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        history.replace("/admin/auth")
    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-main">
            <div className="container-fluid">
                <Link to="/" className="nav-logo">
                    <img
                        src={logo}
                        alt="Cyberwolf store"
                        className="nav-logo-img"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cyberwolfstore-navbar"
                    aria-controls="cyberwolfstore-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="cyberwolfstore-navbar">
                    <ul className="navbar-nav offset-md-2 nav-container-menu">
                        <li>
                            <NavLink exact to="/" activeClassName="active">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName="active">
                                CATÁLOGO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active">
                                ADMIN
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={"container-login-logout"}>
                    {authContextData.authenticated ? (
                        <div className={"content-username-login-logout"}>
                            <span className={"nav-username"}>
                                {authContextData.tokenData?.user_name}
                                {authContextData.tokenData?.authorities.includes('ROLE_ADMIN') ?
                                    <Crown size={24} color="#FFD700" weight="thin" />:""}

                            </span>
                            <a href="#logout" onClick={handleLogoutAfterClick} className={"nav-link"}>
                                SAIR
                                <SignOut
                                    className={"nav-link-icon"}
                                    size={24}
                                    color="#f5f5f5"
                                    weight="regular" />
                            </a>
                        </div>

                    ) : (
                        <Link to="/admin/auth">LOGIN</Link>
                    )

                    }
                </div>
            </div>
        </nav>
    );
};
