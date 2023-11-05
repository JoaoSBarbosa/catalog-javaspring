import "./styles.css";
type propsPrice = {
  price?: number;
};
export const ProductPrice = ({ price = 0.00 }: propsPrice) => {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{price}</h3>
    </div>
  );
};
