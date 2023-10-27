import {DISABLE_DATA, SET_USER_DATA} from "./authVariablesActions.js";

export const setDataUser = (data) => {
    return {
        type: SET_USER_DATA,
        data
    }
}

export const disableDataUser = () => {
    return {
        type: DISABLE_DATA
    }
}