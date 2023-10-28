import {LinkButton, LoginButton, LoginForm, LoginInput, LoginLabel} from "../StyledRegLog.js";
import {Field, reduxForm} from "redux-form";
import React from "react";
import SuperWrappStyled from "../../../HOC/SuperWrappStyled.jsx";
import {WhiteText, WrappButtons} from "../../../styled/main_styled_components.js";


const RegistrationForm = (props) => {
    const RegistrationInput = SuperWrappStyled(LoginInput);
    return (
        <LoginForm onSubmit={props.handleSubmit}>

            <LoginLabel>Логин:</LoginLabel>
            <Field type="text" name="login" component={RegistrationInput}/>

            <LoginLabel>Имя</LoginLabel>
            <Field type="text" name="name" component={RegistrationInput}/>

            <LoginLabel>Пароль:</LoginLabel>
            <Field type="password" name="password" component={RegistrationInput}/>

            <WrappButtons>
                <LoginButton>Присоединиться</LoginButton>
                <WhiteText textsize='15'>или</WhiteText>
                <LinkButton to='/login'>Войти</LinkButton>
            </WrappButtons>

        </LoginForm>
    )
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);