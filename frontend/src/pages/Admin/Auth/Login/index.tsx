import "./styles.css";
import {ButtonIcon} from "../../../../components/Buttons/ButtonIcon";
import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {getAuthDataToLocalStorage, handleRequestLogin, saveAuthDataToLocalStorage} from "../../../../util/request";


type FormData = {
    username: string
    password: string
}
export const Login = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()

    const [hasError, setHasError] = useState<boolean>(false)
    const history = useHistory();
    const onSubmit = (formData: FormData) => {
        handleRequestLogin(formData)
            .then(response => {
                console.log("Sucesso", response)
                saveAuthDataToLocalStorage(response.data)
                setHasError(false)
                console.log(getAuthDataToLocalStorage());
                history.push('/admin')
            })
            .catch(error => {
                console.log("Deu erro", error)
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
                        {...register("username", {
                            required: 'O campo email é obrigatório',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        type="text"
                        className={`form-control base-input ${errors.username ? 'is-invalid':''}`}
                        placeholder="Email"
                        name="username"
                    />

                    <div className={"invalid-feedback d-block"}>{errors.username?.message}</div>


                </div>
                <div className="mb-2">

                    <input
                        {...register("password", {
                            required: 'O campo password é obrigatório'
                        })}
                        type="password"
                        className={`form-control base-input ${errors.password ? 'is-invalid':''}`}
                        placeholder="Password"
                        name="password"
                    />

                    <div className={'invalid-feedback d-block'}>{errors.password?.message}</div>


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