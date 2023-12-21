import "./styles.css"
import {MagnifyingGlass} from "@phosphor-icons/react";
export const ProductFilter = () => {
    return (
        <div className={"base-card product-search-container"}>

            <form action="" className={"product-filter-form-container"}>
                <div className={"product-filter-name-container"}>
                    <input
                        type="text"
                        className={""}
                        placeholder={"Nome do produto"}
                    />
                    <MagnifyingGlass size={22} color="#aaaaaa" weight="light" />                </div>

                <div className={"product-filter-bottom-container"}>
                    <div className={"product-filter-category-container"}>
                        <select >
                            <option value="livros">
                                Livros
                            </option>
                            <option value={"brinquedos"}>
                                Brinquedos
                            </option>
                        </select>
                    </div>
                    <button className={"btn btn-outline-success"}>Limpar</button>
                </div>

            </form>
        </div>
    )
}