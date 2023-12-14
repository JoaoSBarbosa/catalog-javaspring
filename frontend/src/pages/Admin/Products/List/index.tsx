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

type ControlComponentsData = {
    activePage: number
}
export const List = () => {
    const [page, setPage] = useState<SpringPage<Product>>();
    const [isLoading, setIsLoading] = useState(false)
    const isMobile = window.innerWidth < 550;

    const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>(
        {
            activePage: 0
        })
    useEffect(() => {
        // handleGetProduct();
        const params: AxiosRequestConfig = {
            method: 'GET',
            url: "/produtos",
            params: {
                page: controlComponentsData.activePage,
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
    }, [controlComponentsData]);

    const handlePageChange = (pageNumber: number) => {
        setControlComponentsData({activePage: pageNumber})
    }
    const handleGetProduct = () => {

    }

    const [search, setSearch] = useState('');

    const handleFilterList = (event: React.FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value)
    }

    return (

        <div className={"product-crud-container"}>
            <div className={"product-crud-bar-container"}>
                <Link to={"/admin/products/create"}>
                    <button className={"btn btn-primary btn-crud-add"}>ADICIONAR</button>
                </Link>
                <div className={"base-card product-search-container"}>
                    Buscar produto por nome...
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
                                    onDelete={() => handleGetProduct}
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
                        onChange={handlePageChange}
                    />
                </div>
            ) : (
                <div className="row">
                    <Pagination
                        range={3}
                        pageDisplay={1}
                        pageCount={(page) ? page?.totalPages : 0}
                        onChange={handlePageChange}
                    />
                </div>
            )}

        </div>
    )
}