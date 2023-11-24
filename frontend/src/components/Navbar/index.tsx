import {Link, NavLink} from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import logo from "assets/images/logo-cyber2.png";
import {getTokenData, isAuthenticated, removeAuthDataToLocalStorage, TokenData} from "../../util/request";
import {useEffect, useState} from "react";
import history from "../../util/history";


export const NavBar = () => {

    type AuthData = {
        authenticated: boolean;
        tokenData?: TokenData;
    }
    const [authData, setAuthData] = useState<AuthData>(
        {
            authenticated: false
        }
    )

    useEffect(() => {
        if (isAuthenticated()) {
            setAuthData({
                authenticated: true,
                tokenData: getTokenData()
            });
        } else {
            setAuthData({
                authenticated: false
            })
        }

    }, []);

    const handleLogoutAfterClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        removeAuthDataToLocalStorage();
        setAuthData({
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

                <div>
                    {authData.authenticated ? (
                        <div style={{display:"flex",gap:"10px"}}>
                            <span>{authData.tokenData?.user_name}</span>
                            <a href="#logout" onClick={handleLogoutAfterClick}>SAIR</a>
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
