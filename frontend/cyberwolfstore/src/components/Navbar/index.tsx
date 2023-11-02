export const NavBar = () => {
  return (
    <nav className="bg-blue-900 p-3 text-white">
      <div className="nav-conten flex items-center justify-between">
        <a href="/" className="nav-logo flex items-center flex-col">
          <img src="logo2.png" alt="" className="h-14" />
          <h4>CyberWolf Store</h4>
        </a>

        {/* essa div no meio */}
        <div className="nav-container-menu items-center mx-auto">
          <ul className="nav-menu flex gap-28">
            <li className="nav-menu-li">
              <a href="/">HOME</a>
            </li>
            <li className="nav-menu-li">
              <a href="/">CATÁLOGO</a>
            </li>
            <li className="nav-menu-li">
              <a href="/">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
