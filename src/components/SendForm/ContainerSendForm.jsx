import React from 'react';
import ReduxSendForm from "./SendForm.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import {sendComment} from "../../redux/reducers/commentReducer/commentsReducer.js";
import {logoutUser} from "../../redux/reducers/authReducer/authReducer.js";

const ContainerSendForm = (props) => {
    const dispatch = useDispatch();    const name = useSelector(state => state.auth.user.name);
    const isAuth = useSelector(state => state.auth.user.isAuth);

    const onSubmit = values => {
        props.sendComment(values, isAuth)
    }
    const onExit = (e) => {
        e.preventDefault();
        dispatch(logoutUser())
    }

    return (<>
            {!isAuth ? <div>Войдите плиз</div> : <ReduxSendForm onSubmit={onSubmit} onExitClick={onExit} name={name}/>}

        </>
    )
        ;
};


export default connect(null, {sendComment})(ContainerSendForm);