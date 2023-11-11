import {ProductCard} from "components/ProductCard";
import {Product} from "../../types/Product";
import {Link} from "react-router-dom";
import {Pagination} from "../../components/Pagination";
import {useEffect, useState} from "react";
import {SpringPage} from "../../types/vendor/SpringPage";
import axios from "axios";
import {AxiosParams} from "../../types/vendor/AxiosParams";
import {BASE_URL} from "../../util/request";

// ------------------Styles
import "./styles.css";

export const Catalog = () => {

    const produto ={
        "id": 2,
        "name": "Smart TV",
        "description": "Experimente o entretenimento como nunca antes com nossa moderna Smart TV. Visuais deslumbrantes, recursos inteligentes e possibilidades infinitas de entretenimento.",
        "price": 2190.0,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
        "date": "2020-07-14T10:00:00Z",
        "categories": [
            {
                "id": 1,
                "name": "Livros"
            },
            {
                "id": 3,
                "name": "Computadores"
            }
        ]
    }
    const[page,setPage]= useState<SpringPage<Product>>();

    useEffect(()=>{
        const params:AxiosParams = {
            method:"GET",
            url:`${BASE_URL}/produtos`,
            params:{
                page:0,
                size:12
            },
        }
        axios(params)
            .then(response =>{
                setPage(response.data);
                console.log(page)
            });
    },[])
    return (
        <div className="container my-4 catalog-container">
            <div className="row catalog-title-container">
                <h1>Catálogo de produtos</h1>
            </div>
            <div className="row ">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>

                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>

                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>

                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <Link to={"/products/1"}>
                        <ProductCard product={produto}/>
                    </Link>

                </div>
            </div>
            <div className="row ">
                <Pagination/>
            </div>
        </div>
    );
};
