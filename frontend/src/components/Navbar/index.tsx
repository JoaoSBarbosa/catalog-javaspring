import { Link, NavLink } from "react-router-dom";
import "./styles.css";
import "bootstrap/js/src/collapse.js";
import logo from "assets/images/logo-cyber2.png";
export const NavBar = () => {
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
      </div>
    </nav>
  );
};
