import {LinkButton, LoginButton, LoginForm, LoginInput, LoginLabel} from "../StyledRegLog.js";
import {Field, reduxForm} from "redux-form";
import React from "react";
import SuperWrappStyled from "../../../HOC/SuperWrappStyled.jsx";
import {WhiteText, WrappButtons} from "../../../styled/main_styled_components";


const LoginFormRedux = (props) => {
    const LoginFormInput = SuperWrappStyled(LoginInput);
    return (
        <LoginForm onSubmit={props.handleSubmit}>

            <LoginLabel>Логин:</LoginLabel>
            <Field type="text" name="login" component={LoginFormInput}/>

            <LoginLabel>Пароль:</LoginLabel>
            <Field type="password" name="password" component={LoginFormInput}/>

            <WrappButtons>
                <LoginButton>Войти</LoginButton>
                <WhiteText textsize='15'>или</WhiteText>
                <LinkButton to='/registration' >Присоединиться</LinkButton>
            </WrappButtons>


        </LoginForm>
    )
}

export default reduxForm({
    form: 'login'
})(LoginFormRedux);