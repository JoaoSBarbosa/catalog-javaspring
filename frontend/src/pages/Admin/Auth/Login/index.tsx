import "./styles.css";
import {ButtonIcon} from "../../../../components/Buttons/ButtonIcon";
import React from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";


type FormData = {
    username: string
    password: string
}
export const Login = () => {

    const {register, handleSubmit} = useForm<FormData>()

    const onSubmit = (formData: FormData) => {
        console.log(formData);
    }
    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input
                        {...register("username")}
                        type="text"
                        className="form-control base-input"
                        placeholder="Email"
                        name="username"
                    />
                </div>
                <div className="mb-2">
                    <input
                        {...register("password")}
                        type="password"
                        className="form-control base-input "
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha
                </Link>
                <div className="login-submit">
                    <ButtonIcon value="Fazer login"/>
                </div>
                <div className="signup-container">
                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>
            </form>
        </div>


    )
}