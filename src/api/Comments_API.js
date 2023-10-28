import BaseApi from "./config/BaseApi.js";
import {COMMENTS_URL} from "./config/instanse.js";


export default class CommentsRequests extends BaseApi {

    getComments = () => this.getData(`${COMMENTS_URL}/comments`);

    postComment = (data) => this.postData(`${COMMENTS_URL}/comments`, data);

    deleteComment = (id) => this.deleteData(`${COMMENTS_URL}/comments/${id}`);

    toggleLike = (id) => this.postData(`${COMMENTS_URL}/comments/${id}/toggle-like`, null);

};

