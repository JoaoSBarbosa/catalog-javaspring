import process from "process";
import qs from 'qs';
import axios, {AxiosRequestConfig} from "axios";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'jbcatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'jbcatalog123';
const TOKEN_KEY = 'authData';
type LoginData = {
    username: string;
    password: string
}

type LoginResponse ={
    access_token: string;
    token_type: string,
    expires_in: number,
    scope: string,
    userLastName: string,
    userFirstName: string,
    userId: number
}

export const handleRequestLogin = (loginData: LoginData) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers})

}
export const saveAuthDataToLocalStorage =(objAuth: LoginResponse)=>{
    localStorage.setItem(TOKEN_KEY, JSON.stringify(objAuth));
}

export const getAuthDataToLocalStorage =()=>{
    const storageItemString = localStorage.getItem(TOKEN_KEY) ?? "{}";
    return JSON.parse(storageItemString) as LoginResponse;
}

export const handleRequestBackend = (config: AxiosRequestConfig) => {

    const headers = config.withCredentials ? {
        Authorization: "Bearer "
    } : {}

    return axios({...config, baseURL: BASE_URL, headers});
}

