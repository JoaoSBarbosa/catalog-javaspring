import { NavBar } from "components/Navbar";
import "./styles.css";
import cameraFull from "../../assets/images/camera-full.png";

export const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={cameraFull} alt="camera" style={{ height: "360px" }} />
      </div>

      <div className="card-bottom-container">
        <h6>Camera digital</h6>
        <span className="card-bottom-price">2345.67</span>
      </div>
    </div>
  );
};
