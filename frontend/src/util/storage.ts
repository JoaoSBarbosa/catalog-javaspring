
const TOKEN_KEY = 'authData';

type LoginResponse = {
    access_token: string;
    token_type: string,
    expires_in: number,
    scope: string,
    userLastName: string,
    userFirstName: string,
    userId: number
}
export const saveAuthDataToLocalStorage = (objAuth: LoginResponse) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(objAuth));
}

export const getAuthDataToLocalStorage = () => {
    const storageItemString = localStorage.getItem(TOKEN_KEY) ?? "{}";
    return JSON.parse(storageItemString) as LoginResponse;
}
export const removeAuthDataToLocalStorage = () => {
    localStorage.removeItem(TOKEN_KEY)
}