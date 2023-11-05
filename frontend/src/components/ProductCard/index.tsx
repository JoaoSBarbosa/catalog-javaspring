import { NavBar } from "components/Navbar";
import "./styles.css";
import cameraFull from "../../assets/images/camera-full.png";
import { ProductPrice } from "components/ProductPrice";
export const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={cameraFull} alt="camera" style={{ height: "360px" }} />
      </div>

      <div className="card-bottom-container">
        <h6>Camera digital</h6>
        <ProductPrice price="3.500,00" />
      </div>
    </div>
  );
};
