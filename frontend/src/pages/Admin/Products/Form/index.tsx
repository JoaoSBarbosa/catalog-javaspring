import "./styles.css";

export const Form = () => {
    return (
        <div className={"product-crud-container"}>

            <div className={"base-card product-crud-form-card"}>
                <h1 className={"product-crud-form-card-title"}>Dados do produto</h1>

                <form action="" className={"product-crud-form-card-form"}>
                    <div className={"row"}>
                        <div className={"col-lg-6"}>
                            <input type="text" className={"form-control base-input"}/>
                            <input type="text" className={"form-control base-input"}/>
                            <input type="text" className={"form-control base-input"}/>
                        </div>
                        <div className={"col-lg-6"}>
                            <textarea name="" rows={10} className={"form-control base-input"}></textarea>
                        </div>
                    </div>
                    <div className={"product-crud-form-card-buttons"}>
                        <button className={"btn btn-outline-danger"}>Cancelar</button>
                        <button className={"btn btn-success"}>Salvar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}