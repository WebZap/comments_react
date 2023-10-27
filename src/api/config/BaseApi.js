import {BASE_URL} from "./instanse.js";
import saveToken from "../../helpers/saveTokenToCookie.js";

class BaseApi {
    // Получение данных
    getData = async (url) => {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'GET'
        })
        return await response.json()
    }
    // Отправка данных
    postData = async (url, requestBody = null) => {
        debugger
        const token = document.cookie.split('=')[1];
        const response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                body: requestBody ? JSON.stringify(requestBody) : {},
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            }
        );
        const data = await response.json();
        !token ? saveToken(data.user.token) : null
        return data.user;

    }
    //Удаление данных
    deleteData = async (url) => {
        const token = document.cookie.split('=')[1];

        const response = await fetch(`${BASE_URL}${url}`, {
            method: 'DELETE',
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        })
        const data = await response.json()
        console.log(data)
        return data

    }
}


export default BaseApi;
