import {DELETE_POST, SET_COMMENTS, TOOGLE_LIKE_PROGRESS} from "./commentsVariablesActions.js";

export const isFetchingLike = (isFetching = false, id) => {
    return {
        type: TOOGLE_LIKE_PROGRESS,
        isFetching,
        id
    }
}

export const isFechingDelete = (isFetching = false, id) => {
    return {
        type: DELETE_POST,
        isFetching,
        id
    }
}

export const setComments = (comments) => {
    return {
        type: SET_COMMENTS,
        comments
    }
}




