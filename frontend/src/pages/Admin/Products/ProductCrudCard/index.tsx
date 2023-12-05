import "./styles.css";
import {ProductPrice} from "components/ProductPrice";
import {Product} from "../../../../types/Product";
import {CategoryBadge} from "../CategoryBadge";
import {useEffect} from "react";
import {Axios, AxiosRequestConfig} from "axios";
import {handleRequestBackend} from "../../../../util/request";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {Link} from "react-router-dom";

type cardProps = {
    product: Product;
}

export const ProductCrudCard = ({product}: cardProps) => {
    const handleDelete = (productId: number) => {

        if(!window.confirm("Deseja realmente deletar este produto?")){
            return;
        }
        const config: AxiosRequestConfig = {
            method: "DELETE",
            url: `/produtos/${productId}`,
            withCredentials: true,
        };
        handleRequestBackend(config)
            .then(() => {
                console.log("Deletado id" + productId)
            })
            .catch((error) => {
                console.log("Deu erro: " + error)
            })

    }
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
                    {product.categories.map(category => (
                        <CategoryBadge name={category.name} key={category.id}/>
                    ))}
                </div>
            </div>

            <div className={"product-crud-card-buttons-container"}>
                <button
                    className={"btn btn-outline-danger product-crud-card-button"}
                    onClick={() => handleDelete(product.id)}
                >
                    EXCLUIR
                </button>
                <Link to={`/admin/products/${product.id}`}>
                    <button className={"btn btn-outline-dark product-crud-card-button"}>
                        EDITAR
                    </button>
                </Link>

            </div>


        </div>
    );
};
