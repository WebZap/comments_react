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
import {useNavigate} from 'react-router-dom';


const Login = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        // const promiseOnSubmit = new Promise(resolve => {
        //     setTimeout(() => {
        //         dispatch(loginUser(data));
        //         resolve()
        //     }, 2000)
        // })
        // promiseOnSubmit.then(() => navigate('/'))
        dispatch(loginUser(data,navigate));
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