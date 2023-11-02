import "./assets/styles/custom.scss";
import "./App.css";
import { NavBar } from "./components/Navbar";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="">
        <div style={{ backgroundColor: "#1e3a8a" }}>#1e3a8a</div>
        <div style={{ backgroundColor: "#2563eb" }}>#2563eb</div>
      </main>
    </>
  );
}

export default App;
