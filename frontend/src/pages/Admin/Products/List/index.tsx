import {ProductCrudCard} from "../ProductCrudCard";

import "./styles.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {SpringPage} from "../../../../types/vendor/SpringPage";
import {Product} from "../../../../types/Product";
import {AxiosRequestConfig} from "axios";
import {handleRequestBackend} from "../../../../util/request";
import CatalogMagic from "../../../Catalog/loader";

export const List = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/produtos",
            params: {
                page: 0,
                size: 52,
            }
        };
        setIsLoading(true);

        handleRequestBackend(params)
            .then((response) => {
                setPage(response.data)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (

        <div className={"product-crud-container"}>
            <div className={"product-crud-bar-container"}>
                <Link to={"/admin/products/create"}>
                    <button className={"btn btn-primary btn-crud-add"}>ADICIONAR</button>
                </Link>
                <div className={"base-card product-search-container"}>
                    Barra de busca
                </div>
            </div>

            <div className={"row"}>
                {isLoading ?
                    (
                        <CatalogMagic
                            backgroundColor={"#bbb"}
                        />
                    ) :
                    (
                        page?.content.map((product) => (
                            <div key={product.id} className={"col-sm-6 col-md-12"} >
                                <ProductCrudCard product={product}/>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}