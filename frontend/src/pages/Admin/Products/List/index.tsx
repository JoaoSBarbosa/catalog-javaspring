import {ProductCrudCard} from "../ProductCrudCard";

import "./styles.css";
import {Link} from "react-router-dom";

export const List = () => {
    const product = {
        "id": 5,
        "name": "Rails for Dummies",
        "description": "Inicie sua jornada no desenvolvimento web com \"Rails for Dummies\". Aprenda os conceitos essenciais de forma fácil e divertida.",
        "price": 100.99,
        "imgUrl": "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/5-big.jpg",
        "date": "2020-07-14T10:00:00Z",
        "categories": [
            {
                "id": 1,
                "name": "Eletrônicos",

            },
            {
                "id": 2,
                "name": "Livros",

            },
            {
                "id": 3,
                "name": "Developers",

            }
        ]
    }
    return (

        <>
            <div className={"product-crud-bar-container"}>
                <Link to={"/admin/products/create"}>
                    <button className={"btn btn-primary btn-crud-add"}>ADICIONAR</button>
                </Link>
                <div className={"base-card product-search-container"}>
                    Barra de busca
                </div>
            </div>

            <div className={"row"}>
                <div className={"col-sm-6 col-md-12"}>
                    <ProductCrudCard product={product}/>
                </div>
                <div className={"col-sm-6 col-md-12"}>
                    <ProductCrudCard product={product}/>
                </div>
                {/*<div className={"col-sm-6 col-md-12"}>*/}
                {/*    <ProductCrudCard product={product}/>*/}
                {/*</div>*/}
                {/*<div className={"col-sm-6 col-md-12"}>*/}
                {/*    <ProductCrudCard product={product}/>*/}
                {/*</div>*/}
                {/*<div className={"col-sm-6 col-md-12"}>*/}
                {/*    <ProductCrudCard product={product}/>*/}
                {/*</div>*/}
                {/*<div className={"col-sm-6 col-md-12"}>*/}
                {/*    <ProductCrudCard product={product}/>*/}
                {/*</div>*/}

            </div>


        </>
    )
}