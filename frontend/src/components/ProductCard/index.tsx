import { NavBar } from "components/Navbar";
import "./styles.css";
import cameraFull from "../../assets/images/camera-full.png";
import foneMouse from "assets/images/fone-mause.png";
import { ProductPrice } from "components/ProductPrice";
import {Product} from "../../types/Product";
import {Category} from "../../types/Category";

type cardProps ={
    product: Product;
}

export const ProductCard = ({product}: cardProps) => {
  return (
    <div className="base-card product-card">
      <div className="product-card-top-container">
        <img
            src={product.imgUrl?product.imgUrl:"https://uploaddeimagens.com.br/images/004/656/445/full/logo-cyber2.png?1699207931"}
            alt={product.name}
            style={{ height: "360px" }}
        />
      </div>

      <div className="product-card-bottom-container">
        <h6>{product.name}</h6>
        <ProductPrice price={product.price} />
      </div>
    </div>
  );
};
