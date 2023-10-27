import CommentsRequests from "../../../api/Comments_API.js";
import {isFechingDelete, isFetchingLike, setComments} from "./commentsActions.js";
import {DELETE_POST, SET_COMMENTS, TOOGLE_LIKE_PROGRESS} from "./commentsVariablesActions.js";
import errorRequest from "../../../helpers/errorRequest.js";


let initialState = {
    commentsArray: [],// Массив с объектами (список комментариев)
    likeInProgress: [], // Массив с id - кнопок delete которые отсылают запрос
    deleteCommentInProgress: [],// Массив с id - like которые отсылают запрос
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOGLE_LIKE_PROGRESS:   //Добавить / убрать id-like из прогресса запроса данных
            return {
                ...state,
                likeInProgress: action.isFetching ? [...state.likeInProgress, action.id] // если загрузка - добавляем id в список - если нет, добавляем те id которые не схожи с поступающим
                    : state.likeInProgress.filter((id) => id !== action.id)
            }
        case DELETE_POST:   //Добавить / убрать id-like из прогресса запроса данных
            return {
                ...state,
                deleteCommentInProgress: action.isFetching ? [...state.deleteCommentInProgress, action.id] // если загрузка - добавляем id в список - если нет, добавляем те id которые не схожи с поступающим
                    : state.deleteCommentInProgress.filter((id) => id !== action.id)
            }
        case SET_COMMENTS: // Получить список комментариев
            return {
                ...state,
                commentsArray: action.comments
            }
        default :
            return state
    }
}


export const toggleLike = (id, isAuth) => async (dispatch) => {
    if (isAuth) {
        dispatch(isFetchingLike(true, id))
        try {
            await new CommentsRequests().toggleLike(id);
            const data = await new CommentsRequests().getComments();
            dispatch(isFetchingLike(false, id))
            dispatch(setComments(data.comments))
        } catch (error) {
            errorRequest(error)
        }
    } else {
        alert('Вы не авторизованы');
    }
}

export const deletePost = (id, isAuth) => async (dispatch) => {
    if (isAuth) {
        dispatch(isFechingDelete(true, id));
        try {
            await new CommentsRequests().deleteComment(id);
            const data = await new CommentsRequests().getComments()
            dispatch(isFechingDelete(false, id))
            dispatch(setComments(data.comments))
        } catch (error) {
            dispatch(isFechingDelete(false, id))
            errorRequest(error)
        }
    } else {
        alert('Вы не авторизованы');
    }
}


export const sendComment = (commentItem, isAuth) => async (dispatch) => {
    if (isAuth) {
        try {
            await new CommentsRequests().postComment(commentItem)
            const data = await new CommentsRequests().getComments()
            dispatch(setComments(data.comments))
        } catch (error) {
            errorRequest(error)
        }
    } else {
        alert('Вы не авторизованы');
    }
}

export const setListOfComments = () => async (dispatch) => {
    try {
        const data = await new CommentsRequests().getComments()
        dispatch(setComments(data.comments))
    } catch (error) {
        errorRequest(error)
    }
}


