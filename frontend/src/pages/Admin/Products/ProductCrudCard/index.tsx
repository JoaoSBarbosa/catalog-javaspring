import "./styles.css";
import {ProductPrice} from "components/ProductPrice";
import {Product} from "../../../../types/Product";
import {CategoryBadge} from "../CategoryBadge";

type cardProps = {
    product: Product;
}

export const ProductCrudCard = ({product}: cardProps) => {
    return (
        <div className="base-card product-crud-card">

            <div className="product-crud-card-top-container">
                <img
                    src={product.imgUrl ? product.imgUrl : "https://uploaddeimagens.com.br/images/004/656/445/full/logo-cyber2.png?1699207931"}
                    alt={product.name}
                    width={158}
                    height={158}

                />
            </div>

            <div className={"product-crud-card-description"}>
                <div className="product-crud-card-bottom-container">
                    <h6>{product.name}</h6>
                    <ProductPrice price={product.price}/>
                </div>
                <div className={"product-crud-categories-container"}>
                    {product.categories.map(category =>(
                        <CategoryBadge name={category.name} key={category.id}/>
                    ))}
                </div>
            </div>

            <div className={"product-crud-card-buttons-container"}>
                <button className={"btn btn-outline-danger product-crud-card-button"}>
                    EXCLUIR
                </button>
                <button className={"btn btn-outline-dark product-crud-card-button"}>
                    EDITAR
                </button>
            </div>


        </div>
    );
};
