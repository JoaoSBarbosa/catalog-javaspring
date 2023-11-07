import "./styles.css";
import {formatPrice} from "../../util/formatter";
type propsPrice = {
  price?: number;
};
export const ProductPrice = ({ price = 0.00 }: propsPrice) => {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{formatPrice(price)}</h3>
    </div>
  );
};
