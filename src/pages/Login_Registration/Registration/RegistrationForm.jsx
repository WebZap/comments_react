import {LoginButton, LoginForm, LoginInput, LoginLabel} from "../StyledRegLog.js";
import {Field, reduxForm} from "redux-form";
import React from "react";
import SuperWrappStyled from "../../../HOC/SuperWrappStyled.jsx";


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

            <LoginButton>Присоединиться</LoginButton>

        </LoginForm>
    )
}

export default reduxForm({
    form: 'registration'
})(RegistrationForm);