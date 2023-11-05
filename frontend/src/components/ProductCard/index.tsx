import { NavBar } from "components/Navbar";
import "./styles.css";
import cameraFull from "../../assets/images/camera-full.png";
import foneMouse from "assets/images/fone-mause.png";
import { ProductPrice } from "components/ProductPrice";

export const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={foneMouse} alt="camera" style={{ height: "360px" }} />
      </div>

      <div className="card-bottom-container">
        <h6>Kit Pró - Headset Wolftech + Teclado Pró Wolf + Mouse Pró Alfa</h6>
        <ProductPrice price="550,00" />
      </div>
    </div>
  );
};
