import React from 'react';
import ReduxSendForm from "./SendForm.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import {sendComment} from "../../redux/reducers/commentReducer/commentsReducer.js";
import {logoutUser} from "../../redux/reducers/authReducer/authReducer.js";
import {WrappButtons} from "../../styled/main_styled_components";
import {LinkButton} from "../Login_Registration/StyledRegLog";
import cookie from "../../helpers/cookieFunc.js";

const ContainerSendForm = (props) => {
    const dispatch = useDispatch();

    const {name, isAuth} = useSelector(state => ({
        name: state.auth.user.name,
        isAuth: state.auth.user.isAuth
    }))

    let token = cookie.take('token')
    let nameUser = cookie.take('nameUser')

    const onSubmit = values => {
        props.sendComment(values, token)
    }
    const onExit = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
    }

    return (<>
            {!token ?
                <WrappButtons>
                    <LinkButton to='/login'>Войти</LinkButton>
                    <LinkButton to='/registration'>Зарегистрироваться</LinkButton>
                </WrappButtons>
                :
                <ReduxSendForm onSubmit={onSubmit} onExitClick={onExit} name={nameUser}/>}

        </>
    )
        ;
};


export default connect(null, {sendComment})(ContainerSendForm);