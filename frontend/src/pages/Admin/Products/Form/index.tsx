import "./styles.css";
import {useForm} from "react-hook-form";
import {Product} from "../../../../types/Product";
import {handleRequestBackend, handleRequestLogin} from "../../../../util/request";
import {saveAuthDataToLocalStorage} from "../../../../util/storage";
import {useState} from "react";
import {AxiosRequestConfig} from "axios";
import * as events from "events";
import {useHistory} from "react-router-dom";

type FormData = {}
export const Form = () => {
    const history = useHistory();

    const {register, handleSubmit, formState: {errors}} = useForm<Product>();
    const [hasError, setHasError] = useState<boolean>(false)

    const onSubmit = (formProduct: Product) => {
        const data =
            {
                ...formProduct,
                categories: [
                    {id: 1, name: ""}
                ]
            }
        const config: AxiosRequestConfig = {
            method: "POST",
            url: "/produtos",
            data: data,
            withCredentials: true
        };

        handleRequestBackend(config)
            .then((response) => {
                setHasError(false);
                console.log(response.data)
            })
            .catch((errors) => {
                setHasError(true);
            })
    }
    const handleCancel = () => {
        history.push("/admin/products")
    }

    return (
        <div className={"product-crud-container"}>

            <div className={"base-card product-crud-form-card"}>
                <h1 className={"product-crud-form-card-title"}>Dados do produto</h1>

                <form onSubmit={handleSubmit(onSubmit)} className={"product-crud-form-card-form"}>
                    <div className={"row product-crud-inputs-container"}>
                        <div className={"col-lg-6 product-crud-column-left-container"}>
                            <div className={"product-crud-input"}>
                                <input
                                    {...register("name", {
                                        required: "O nome do produto é obrigatório",
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder={"Nome do produto"}
                                    name={"name"}
                                />
                                <div className={"invalid-feedback d-block"}>{errors.name?.message}</div>
                            </div>

                            {/*<div className={"product-crud-input"}>*/}
                            {/*    <input*/}
                            {/*        {...register("categories", {*/}
                            {/*            required: "Selecione uma categoria para o produto"*/}
                            {/*        })}*/}
                            {/*        type="text"*/}
                            {/*        className={`form-control base-input ${errors.categories ? 'is-invalid' : ''}`}*/}
                            {/*        placeholder={"Categoria"}*/}
                            {/*        name={"categories"}*/}
                            {/*        />*/}
                            {/*    <div className={"invalid-feedback d-block"}>{errors.categories?.message}</div>*/}
                            {/*</div>*/}

                            <div className={"product-crud-input"}>

                                <input
                                    {...register("price", {
                                        required: "O campo preço é obrigatório"
                                    })}
                                    type="text"
                                    placeholder={"Preço"}
                                    className={`form-control base-input ${errors.price ? 'is-invalid' : ''}`}
                                    name={"price"}
                                />
                                <div className={"invalid-feedback d-block"}>{errors.price?.message}</div>

                            </div>

                        </div>
                        <div className={"col-lg-6"}>
                            <div>
                                <textarea
                                    {...register("description", {
                                        required: "O campo descrição é obrigatório"
                                    })}
                                    name="description"
                                    rows={10}
                                    placeholder={"Descrição do produto..."}
                                    className={`form-control base-input h-auto ${errors.description ? 'is-invalid' : ''}`}

                                />
                                <div className={"invalid-feedback d-block"}>{errors.description?.message}</div>

                            </div>

                        </div>
                    </div>
                    <div className={"product-crud-buttons-container"}>
                        <button
                            className={"btn btn-outline-danger product-crud-button"}
                            onClick={handleCancel}>
                            Cancelar
                        </button>
                        <button className={"btn btn-success product-crud-button text-white"}>Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}