import {ProductCrudCard} from "../ProductCrudCard";

import "./styles.css";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {SpringPage} from "../../../../types/vendor/SpringPage";
import {Product} from "../../../../types/Product";
import {AxiosRequestConfig} from "axios";
import {handleRequestBackend} from "../../../../util/request";
import CatalogMagic from "../../../Catalog/loader";
import {Pagination} from "../../../../components/Pagination";

export const List = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = window.innerWidth < 550;


    useEffect(() => {
        handleGetProduct(0);
    }, []);

    const handleGetProduct = (pageNumber:number) => {
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/produtos",
            params: {
                page: pageNumber,
                size: 3,
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
    }


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
                            <div key={product.id} className={"col-sm-6 col-md-12"}>
                                <ProductCrudCard
                                    product={product}
                                    onDelete={()=> handleGetProduct(page?.number)}
                                />
                            </div>
                        ))
                    )
                }
            </div>
            {isMobile ? (
                <div className="row">
                    <Pagination
                        range={2}
                        pageDisplay={0}
                        pageCount={(page) ? page?.totalPages : 0}
                        onChange={handleGetProduct}
                    />
                </div>
            ):(
                <div className="row">
                    <Pagination
                        range={3}
                        pageDisplay={1}
                        pageCount={(page) ? page?.totalPages : 0}
                        onChange={handleGetProduct}
                    />
                </div>
            )}

        </div>
    )
}