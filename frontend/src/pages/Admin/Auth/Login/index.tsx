import "./styles.css";
import {ButtonIcon} from "../../../../components/Buttons/ButtonIcon";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {handleRequestLogin} from "../../../../util/request";


type FormData = {
    username: string
    password: string
}
export const Login = () => {

    const {register, handleSubmit} = useForm<FormData>()

    const[hasError,setHasError] = useState<boolean>(false)
    const onSubmit = (formData: FormData) => {
        handleRequestLogin(formData)
            .then(response =>{
                console.log("Sucesso",response)
                setHasError(false)
            })
            .catch(error =>{
                console.log("Deu erro",error)
                setHasError(true);
            });
    }

    return (
        <div className="base-card login-card">
            <h1>LOGIN</h1>
            {hasError &&
                <div className="alert alert-danger" role="alert">
                    Ocorreu um erro ao tentar realizar o login!
                </div>
            }

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