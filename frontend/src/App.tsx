import "./assets/styles/custom.scss";
import "./App.css";
// Importação de componentes
import { NavBar } from "./components/Navbar";
import { Home } from "pages/Home";
import { Catalog } from "pages/Catalog";

function App() {
  return (
    <>
      {/* <Home /> */}
      <Catalog />
    </>
  );
}

export default App;
