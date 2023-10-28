import React from 'react';
import {
    BgModal,
    CenteredContainer,
    LoginContainer,
    LoginTitle
} from "../StyledRegLog.js";
import RegistrationForm from "./RegistrationForm.jsx";
import {useDispatch} from "react-redux";
import {loginUser, registerUser} from "../../../redux/reducers/authReducer/authReducer.js";
import {useNavigate} from "react-router-dom";


const Registration = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        // const promiseOnSubmit = new Promise(resolve => {
        //     setTimeout(() => {
        //         dispatch(registerUser(data));
        //         resolve()
        //     }, 2000)
        // })
        // promiseOnSubmit.then(() => navigate('/'))
        dispatch(registerUser(data,navigate));


    }

    return (
        <CenteredContainer>
            <BgModal>
                <LoginContainer>
                    <LoginTitle>Регистрация</LoginTitle>
                    <RegistrationForm onSubmit={onSubmit}/>
                </LoginContainer>
            </BgModal>
        </CenteredContainer>
    );
};


export default Registration