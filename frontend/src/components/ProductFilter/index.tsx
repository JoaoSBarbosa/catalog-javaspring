import "./styles.css"
import {MagnifyingGlass} from "@phosphor-icons/react";
import {Controller, useForm} from "react-hook-form";
import {Category} from "../../types/Category";
import Select from "react-select";
import React, {useEffect, useState} from "react";
import {handleRequestBackend} from "../../util/request";

type ProdyctFilter = {
    name: string;
    category: Category | null;
}
export const ProductFilter = () => {
    const [selectCategories, setSelectCategories] = useState<Category[]>([]);

    const {
        register,
        handleSubmit,
        control,
        getValues,
        setValue
    } = useForm<ProdyctFilter>();

    const onSubmit = (formData: ProdyctFilter) => {
        console.log("Enviou: ", formData)
    }
    useEffect(() => {
        handleRequestBackend({
            url: `/categorias`
        })
            .then((response) => {
                const categoriesRequest = response.data.content;
                setSelectCategories(categoriesRequest);
            })
    }, []);

    const handleFormClear = () => {
        setValue('name', '');
        setValue('category', null)
    }
    const handleChangeCategory =(value: Category)=>{
        setValue('category', value);

        const formObject: ProdyctFilter ={
            name:getValues('name'),
            category: getValues('category')
        }
        console.log(formObject)
    }
    return (
        <div className={"base-card product-search-container"}>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={"product-filter-form-container"}>
                <div className={"product-filter-name-container"}>
                    <input
                        {
                            ...register('name')}
                        type="text"
                        name="name"
                        className={"form-control"}
                        placeholder={"Nome do produto"}
                    />
                    <button className={"product-filter-btn-icon"}>
                        <MagnifyingGlass size={22} color="#aaaaaa" weight="light"/>
                    </button>
                </div>

                <div className={"product-filter-bottom-container"}>
                    <div className={"product-filter-category-container"}>
                        <Controller
                            name={"category"}
                            control={control}
                            render={({field}) => (
                                <Select {...field}
                                        onChange={value => handleChangeCategory(value as Category)}
                                        options={selectCategories}
                                        isClearable
                                        placeholder={"Categoria"}
                                        getOptionLabel={(category: Category) => category.name}
                                        getOptionValue={(category: Category) => String(category.id)}
                                        classNamePrefix={"product-filter-select"}
                                />
                            )}
                        />
                    </div>
                    <button
                        className={"btn btn-outline-secondary product-filter-btn-clear"
                        } onClick={handleFormClear}>
                        Limpar
                        <span className={"product-filter-btn-clear-word"}>
                            filtro
                        </span>
                    </button>
                </div>

            </form>
        </div>
    )
}