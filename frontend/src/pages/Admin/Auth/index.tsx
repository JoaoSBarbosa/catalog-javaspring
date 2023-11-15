import {ReactComponent as AuthImage} from "assets/images/auth-banner.svg";
import {Route, Switch} from "react-router-dom";
import "./styles.css";
import {Login} from "./Login";

export const Auth = () => {
    return (
        <div className={"auth-container"}>

            <div className={"auth-banner-container"}>
                <h1>Promova seus produtos com destaque no Cyber Wolf🐺

                </h1>
                <p>Junte-se ao nosso catálogo exclusivo de divulgação e potencialize as vendas dos seus produtos. Alcance novos clientes e destaque-se no mercado. Não perca a oportunidade de fazer parte do sucesso no Cyber Wolf! 🚀</p>
                <div className={"auth-image-container"}>
                    <AuthImage/>
                </div>
            </div>

            <div className={"auth-form-container"}>
                <Switch>
                    <Route path={"/admin/auth/login"}>
                        <Login/>
                    </Route>
                    <Route path={"/admin/auth/signup"}>
                        <h1>Page de cadastro</h1>

                    </Route>
                    <Route path={"/admin/auth/recover"}>
                        <h1>Page de recumperação de senha</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}