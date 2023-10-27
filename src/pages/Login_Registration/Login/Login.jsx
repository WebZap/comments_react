import React from 'react';
import {
    BgModal,
    CenteredContainer,
    LoginContainer,
    LoginTitle
} from "../StyledRegLog.js";
import {useDispatch} from "react-redux";
import LoginFormRedux from "./LoginFormRedux.jsx";
import {loginUser} from "../../../redux/reducers/authReducer/authReducer.js";


const Login = (props) => {
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(loginUser(data))
    }

    return (
        <CenteredContainer>
            <BgModal>
                <LoginContainer>
                    <LoginTitle>Вход</LoginTitle>
                    <LoginFormRedux onSubmit={onSubmit}/>
                </LoginContainer>
            </BgModal>
        </CenteredContainer>
    );
};


export default Login