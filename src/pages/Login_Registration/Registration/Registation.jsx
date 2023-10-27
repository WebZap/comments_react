import React from 'react';
import {
    BgModal,
    CenteredContainer,
    LoginContainer,
    LoginTitle
} from "../StyledRegLog.js";
import RegistrationForm from "./RegistrationForm.jsx";
import {useDispatch} from "react-redux";
import { registerUser} from "../../../redux/reducers/authReducer/authReducer.js";


const Registration = (props) => {
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(registerUser(data))
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