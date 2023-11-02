import "./styles.css";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md  bg-primary nav-main">
      <div className="container-fluid">
        <a href="/" className="nav-logo">
          <img
            src="logo-cyber2.png"
            alt="Cyberwolf store"
            className="nav-logo-img"
          />
        </a>

        <div className="collapse navbar-collapse">
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
