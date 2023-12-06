import "./styles.css";
import {useForm, Controller} from "react-hook-form";
import {Product} from "../../../../types/Product";
import {handleRequestBackend, handleRequestLogin} from "../../../../util/request";
import {saveAuthDataToLocalStorage} from "../../../../util/storage";
import {useEffect, useState} from "react";
import {AxiosRequestConfig} from "axios";
import * as events from "events";
import {useHistory, useParams} from "react-router-dom";
import Select from 'react-select'
import {Category} from "../../../../types/Category";

export type UrlParams = {
    productId: string;
}

export const Form = () => {

    const history = useHistory();
    const {productId} = useParams<UrlParams>();

    const isEditing = productId !== "create";
    const [hasError, setHasError] = useState<boolean>(false)

    const [selectCategories, setSelectCategories] = useState<Category[]>([]);
    const productListingRoute = "/admin/products/";

    const {
        register,
        handleSubmit,
        formState: {errors},
        control,
        setValue
    } = useForm<Product>();

    useEffect(() => {
        if (isEditing) {
            handleRequestBackend({url: `/produtos/${productId}`})
                .then((response) => {
                    const productRequest = response.data as Product;
                    setValue('name', productRequest.name);
                    setValue('price', productRequest.price);
                    setValue('description', productRequest.description);
                    setValue('imgUrl', productRequest.imgUrl);
                    setValue('categories', productRequest.categories);

                })
        }
    }, [isEditing, productId, setValue]);


    useEffect(() => {
        handleRequestBackend({
            url: `/categorias`
        })
            .then((response) => {
                const categoriesRequest = response.data.content;
                setSelectCategories(categoriesRequest);
            })
    }, []);

    const onSubmit = (formProduct: Product) => {
        const data =
            {
                ...formProduct,
                imgUrl: isEditing ? formProduct.imgUrl : "https://uploaddeimagens.com.br/images/004/662/070/full/console-nintendo-removebg-preview.png?1699664167",
                categories: isEditing ? formProduct.categories : [
                    {id: 1, name: ""}
                ]
            }
        const config: AxiosRequestConfig = {
            method: isEditing ? "PUT" : "POST",
            url: isEditing ? `/produtos/${productId}` : "/produtos",
            data: data,
            withCredentials: true
        };

        handleRequestBackend(config)
            .then(() => {
                setHasError(false);
                history.push(productListingRoute);
            })
            .catch((errors) => {
                setHasError(true);
            })
    }
    const handleCancel = () => {
        history.push(productListingRoute)
    }

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
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
                                        required: "Por favor, informe o nome do produto.",
                                    })}
                                    type="text"
                                    className={`form-control base-input ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder={"Nome do produto"}
                                    name={"name"}
                                />
                                <div className={"invalid-feedback d-block"}>{errors.name?.message}</div>
                            </div>
                            <div className={"product-crud-input"}>
                                <Controller
                                    name={"categories"}
                                    rules={{required: "Selecione uma categoria para o produto."}}
                                    control={control}
                                    render={({field}) => (
                                        <Select {...field}
                                                options={selectCategories}
                                                isMulti
                                                getOptionLabel={(category: Category) => category.name}
                                                getOptionValue={(category: Category) => String(category.id)}
                                                classNamePrefix={"product-crud-select"}
                                        />
                                    )}
                                />
                                {errors.categories &&
                                    <div className={"invalid-feedback d-block"}>
                                        {errors.categories.message}
                                    </div>
                                }
                            </div>

                            {/*<div className={"product-crud-input"}>*/}
                            {/*    <Controller*/}

                            {/*        name={"categories"}*/}
                            {/*        rules={{*/}
                            {/*            required: true*/}
                            {/*        }}*/}
                            {/*        control={control}*/}
                            {/*        render={({field}) => (*/}
                            {/*            <Select {...field}*/}
                            {/*                    options={selectCategories}*/}
                            {/*                    isMulti*/}
                            {/*                    getOptionLabel={(category: Category) => category.name}*/}
                            {/*                    getOptionValue={(category: Category) => String(category.id)}*/}
                            {/*                    classNamePrefix={"product-crud-select"}*/}
                            {/*            />*/}
                            {/*        )}*/}
                            {/*    />*/}
                            {/*    {errors.categories &&*/}
                            {/*        <div className={"invalid-feedback d-block"}>*/}
                            {/*            Selecione uma categoria para o produto</div>*/}
                            {/*    }*/}
                            {/*    */}
                            {/*</div>*/}


                            <div className={"product-crud-input"}>

                                <input
                                    {...register("price", {
                                        required: "Por favor, informe o preço do produto."
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
                                        required: "Por favor, forneça uma descrição para o produto."
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