// ---- COMPONENTES ----
import {ProductCard} from "components/ProductCard";
import {Pagination} from "../../components/Pagination";
import {handleRequestBackend} from "../../util/request";

// ---- TIPOS ----
import {Product} from "../../types/Product";
import {SpringPage} from "../../types/vendor/SpringPage";
// ---- IMPORT SISTEMA ----
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {AxiosRequestConfig} from "axios";

// ---- Styles ----
import CatalogMagic from "./loader"; // Importa o componente de loader
import "./styles.css";

export const Catalog = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [loading, setLoading] = useState<boolean>(true);

    const handleGetProduct = (pageNumber: number) => {
        const params: AxiosRequestConfig = {
            method: "GET",
            url: `/produtos`,
            params: {
                page: pageNumber,
                size: 12,
            },
        };

        handleRequestBackend(params)
            .then(response => {
                setPage(response.data);
            })
            .finally(() => {
                setLoading(false);
            });
    }
    useEffect(() => {
        handleGetProduct(0)
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
                <Pagination
                    range={3}
                    pageCount={(page) ? page?.totalPages : 0}
                    onChange={handleGetProduct}
                />
            </div>
        </div>
    );
};