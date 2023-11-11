// ---- COMPONENTES ----
import {ProductCard} from "components/ProductCard";
import {Pagination} from "../../components/Pagination";
import {BASE_URL} from "../../util/request";

// ---- TIPOS ----
import {Product} from "../../types/Product";
import {SpringPage} from "../../types/vendor/SpringPage";
import {AxiosParams} from "../../types/vendor/AxiosParams";
// ---- IMPORT SISTEMA ----
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

// ---- Styles ----
import CatalogMagic from "./loader"; // Importa o componente de loader
import "./styles.css";

export const Catalog = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const params: AxiosParams = {
            method: "GET",
            url: `${BASE_URL}/produtos`,
            params: {
                page: 0,
                size: 12
            },
        };

        axios(params)
            .then(response => {
                setPage(response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Catálogo de produtos</h1>
            </div>
            <div className="row">

                {loading ?
                    <CatalogMagic
                        backgroundColor={"#bbb"}
                    />
                    :
                    (page?.content.map((product) => (
                        <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <ProductCard product={product}/>
                            </Link>
                        </div>
                    )))}
            </div>
            <div className="row">
                <Pagination/>
            </div>
        </div>
    );
};