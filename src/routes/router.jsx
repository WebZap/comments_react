import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegistrationPage from "../pages/RegistrationPage.jsx";
import React from "react";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/registration',
        element: <RegistrationPage/>
    }
])

export default router