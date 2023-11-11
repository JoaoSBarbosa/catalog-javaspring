import "./styles.css";
import {ReactComponent as ArrowIcon} from "assets/images/Seta.svg";
import {ProductPrice} from "../../components/ProductPrice";
import {Link, useParams} from "react-router-dom";
import {Product} from "../../types/Product";
import axios from "axios";
import {BASE_URL} from "../../util/request";
import {useEffect, useState} from "react";

type UrlParams ={
    productId:string;
}
export const ProductDetails = () => {

    const {productId} = useParams<UrlParams>()
    const [product, setProduct] = useState<Product>();


    useEffect(() => {
        axios.get(`${BASE_URL}/produtos/${productId}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error making request:', error);
            });
    }, [productId]);


    return (
        <div className={"product-details-container"}>
            <div className={"product-details-card base-card"}>
                <Link to={"/products"}>
                    <div className={"product-details-go-back"}>
                        <ArrowIcon/><h2>voltar</h2>
                    </div>
                </Link>
                <div className={"row"}>
                    <div className={"col-xl-6"}>

                        <div className={"product-image-container"}>
                            <img
                                src={product?.imgUrl}
                                // src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                                alt={product?.name}/>
                        </div>
                        <div className={"product-name-price-container"}>
                            <h1>{product?.name}</h1>
                            {product && <ProductPrice price={product?.price}/>}
                        </div>

                    </div>

                    <div className={"col-xl-6"}>
                        <div className={"product-description-container"}>
                            <h2>Descrição do produto</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}