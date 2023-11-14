import {ReactComponent as AuthImage} from "assets/images/login.svg";
import {Route, Switch} from "react-router-dom";

export const Auth = () => {
    return (
        <div className={"auth-container"}>

            <div className={"auth-banner-container"}>
                <h1>Divulgue seus produtos ns Cyber Wolf 🐺</h1>
                <p>Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos</p>
                <AuthImage/>
            </div>

            <div className={"auth-form-container"}>
                <Switch>
                    <Route path={"/admin/auth/login"}>
                        <h1>Page de login</h1>
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