import "./styles.css";
import "bootstrap/js/src/collapse.js";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-main">
      <div className="container-fluid">
        <a href="/" className="nav-logo">
          <img
            src="logo-cyber2.png"
            alt="Cyberwolf store"
            className="nav-logo-img"
          />
        </a>

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
              <a href="/" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="/">CATÁLOGO</a>
            </li>
            <li>
              <a href="">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
