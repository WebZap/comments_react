import {commentsReducer} from "./reducers/commentReducer/commentsReducer.js";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {reducer as formReducer} from 'redux-form';
import {authReducer} from "./reducers/authReducer/authReducer.js";

let rootReduce = combineReducers({
    comments: commentsReducer,
    auth: authReducer,
    form: formReducer
})

const store = configureStore({
    reducer: rootReduce,
})

window.store = store

export default store


