import {BASE_URL} from "./instanse.js";
import cookie from "../../helpers/cookieFunc.js";

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

        const token = cookie.take('token')
        const response = await fetch(`${BASE_URL}${url}`, {
                method: 'POST',
                body: requestBody ? JSON.stringify(requestBody) : {},
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            }
        );
        const data = await response.json();
        // !token ? saveToken(data.user.token, data.user.name) : null
        // !token ? cookie.save('token', data.user.token) : null

        if (!token) {
            cookie.save('token', data.user.token)
            cookie.save('nameUser', data.user.name)
            cookie.save('imageUrl', data.user.imageUrl)
        } else {
            return null
        }

        return data.user;

    }
    //Удаление данных
    deleteData = async (url) => {
        const token = cookie.take('token')

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


// если токен имеется в куках,то мы разрешаем отправку сообщений, если нет нет
