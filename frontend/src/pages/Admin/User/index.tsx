import {useEffect, useState} from "react";
import {AxiosRequestConfig} from "axios";
import {handleRequestBackend, handleRequestLogin} from "../../../util/request";
import {SpringPage} from "../../../types/vendor/SpringPage";
import {User} from "../../../types/User";

export const Users =()=>{
    const [page,setPage] = useState<SpringPage<User>>();

    useEffect(()=>{
        const params:AxiosRequestConfig ={
            url: '/users',
            withCredentials:true,
            params:{
                page:0,
                size:12
            },
        };

        handleRequestBackend(params).then((response)=>{
            setPage(response.data)
        })
    },[])
    return(
        <div>
            {page?.content.map((item)=>(
                <p key={item.id}>{item.email}</p>
            ))}
        </div>
    )
}