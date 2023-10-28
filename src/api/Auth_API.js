import BaseApi from "./config/BaseApi.js";

export default class AuthRequests extends BaseApi {
    registerUser = data => {
        return this.postData(`user`, data)
    }

    loginInUser = (data) => {
        return this.postData(`user/login`, data)
    };
}


