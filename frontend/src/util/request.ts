import process from "process";
import qs from 'qs';
import axios, {AxiosRequestConfig} from "axios";
import history from "./history";
import {getAuthDataToLocalStorage} from "./storage";

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'jbcatalog';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'jbcatalog123';

type LoginData = {
    username: string;
    password: string
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

export const handleRequestBackend = (config: AxiosRequestConfig) => {

    const headers = config.withCredentials
        ? {
            ...config.headers, Authorization: "Bearer " + getAuthDataToLocalStorage().access_token
        }
        : config.headers

    return axios({...config, baseURL: BASE_URL, headers});
}


// interceptor para antes da requisição
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// interceptor para a resposta da requisição
axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        history.push("/admin/auth")
    }
    return Promise.reject(error);
});



