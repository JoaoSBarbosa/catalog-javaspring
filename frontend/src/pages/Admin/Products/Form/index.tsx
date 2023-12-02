import "./styles.css";

export const Form = () => {
    return (
        <div className={"product-crud-container"}>

            <div className={"base-card product-crud-form-card"}>
                <h1 className={"product-crud-form-card-title"}>Dados do produto</h1>

                <form action="" className={"product-crud-form-card-form"}>
                    <div className={"row product-crud-inputs-container"}>
                        <div className={"col-lg-6 product-crud-column-left-container"}>
                            <div className={"product-crud-input"}>
                                <input type="text" className={"form-control base-input"}/>
                            </div>
                            <div className={"product-crud-input"}>
                                <input type="text" className={"form-control base-input"}/>
                            </div>
                            <div className={"product-crud-input"}>
                                <input type="text" className={"form-control base-input"}/>
                            </div>

                        </div>
                        <div className={"col-lg-6"}>
                            <textarea
                                name=""
                                rows={5}
                                className={"form-control"}
                            >

                            </textarea>
                        </div>
                    </div>
                    <div className={"product-crud-buttons-container"}>
                        <button className={"btn btn-outline-danger"}>Cancelar</button>
                        <button className={"btn btn-success"}>Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}