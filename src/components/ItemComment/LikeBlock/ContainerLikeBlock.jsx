import React from 'react';
import LikeBlock from "./LikeBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleLike} from "../../../redux/reducers/commentReducer/commentsReducer.js";
import cookie from "../../../helpers/cookieFunc.js";

const ContainerLikeBlock = (props) => {
    const dispatch = useDispatch()

    const {likeInProgress,isAuth} = useSelector(state => ({
        likeInProgress : state.comments.likeInProgress,
        isAuth: state.auth.user.isAuth
    }))
    const token = cookie.take('token')
    const onClickLike = (id) => {
        dispatch(toggleLike(id,token))
    }

    return <LikeBlock countLikes={props.countLikes}
                      id={props.id}
                      likeInProgress={likeInProgress}
                      onClickLike={onClickLike}
                      isAuth={isAuth}

    />
};

export default ContainerLikeBlock;