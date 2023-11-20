import {useEffect, useState} from "react";
import {AxiosRequestConfig} from "axios";
import {handleRequestBackend, handleRequestLogin} from "../../../util/request";
import {SpringPage} from "../../../types/vendor/SpringPage";
import {User} from "../../../types/User";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const Users = () => {
    const [page, setPage] = useState<SpringPage<User>>();
    const [error, setError] = useState<string | null>(null); // Adicionando um estado para armazenar mensagens de erro

    useEffect(() => {
        const params: AxiosRequestConfig = {
            url: '/users',
            withCredentials: true,
            params: {
                page: 0,
                size: 12
            },
        };

        handleRequestBackend(params)
            .then((response) => {
                setPage(response.data)
                setError(null)
            })
            .catch((error) => {
                console.log("Deu erro: ", error)
                setError("Erro ao buscar usuários"+error)
            })
    }, [])
    return (
        <div>
            {error ? (
                <p>Um erro ocorreu: {error}</p>
            ) : (
                page?.content.map((item) => (
                    <p key={item.id}>{item.email}</p>
                ))
            )}

        </div>
    )
}