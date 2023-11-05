import "./styles.css";
type propsPrice = {
  price?: string;
};
export const ProductPrice = ({ price = "2.779,00" }: propsPrice) => {
  return (
    <div className="product-price-container">
      <span>R$</span>
      <h3>{price}</h3>
    </div>
  );
};
