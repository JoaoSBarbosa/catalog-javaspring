import "./assets/styles/custom.scss";
import "./App.css";
// Importação de componentes
import { NavBar } from "./components/Navbar";
import { Home } from "pages/Home";
import { Catalog } from "pages/Catalog";
import { Routes } from "Routes";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Catalog /> */}
      <Routes />
    </>
  );
}

export default App;
