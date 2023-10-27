import AuthRequests from "../../../api/Auth_API.js";
import errorRequest from "../../../helpers/errorRequest.js";
import {DISABLE_DATA, SET_USER_DATA} from "./authVariablesActions.js";
import {disableDataUser, setDataUser} from "./authActions.js";
import deleteCookie from "../../../helpers/deleteCookie.js";

const initialState = {
    user: {
        id: null,
        name: null,
        imageUrl: null,
        isAuth: false,
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                user: {
                    id: action.data._id,
                    name: action.data.name,
                    imageUrl: action.data.imageUrl,
                    token: action.data.token,
                    isAuth: true,
                }
            }
        case DISABLE_DATA:
            return {
                ...state,
                user: {
                    id : null,
                    name: null,
                    imageUrl: null,
                    token: null,
                    isAuth: false,
                }
            }
        default :
            return state
    }
}

export const registerUser = (data) => async (dispatch) => {
    try {
        const response = await new AuthRequests().registerUser(data)
        dispatch(setDataUser(response))
    } catch (error) {
        errorRequest(error)
    }
}

export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await new AuthRequests().loginInUser(data)
        dispatch(setDataUser(response))
    } catch (error) {
        errorRequest(error)
    }
}

export const logoutUser = () => async (dispatch) => {
    dispatch(disableDataUser());
    deleteCookie()
}

