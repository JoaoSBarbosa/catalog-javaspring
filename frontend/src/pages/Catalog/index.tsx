import { NavBar } from "components/Navbar";
import "./styles.css";
import { ProductCard } from "components/ProductCard";

export const Catalog = () => {
  return (
    <>
      <NavBar />
      <div className="container my-4">
        <ProductCard />
      </div>
    </>
  );
};
