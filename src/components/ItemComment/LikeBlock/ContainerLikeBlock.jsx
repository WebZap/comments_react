import React from 'react';
import {LikeButton, Likes, LikesCounter} from "../../../styled/main_styled_components.js";
import LikeBlock from "./LikeBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {toggleLike} from "../../../redux/reducers/commentReducer/commentsReducer.js";

const ContainerLikeBlock = (props) => {
    const dispatch = useDispatch()

    const {likeInProgress,isAuth} = useSelector(state => ({
        likeInProgress : state.comments.likeInProgress,
        isAuth: state.auth.user.isAuth
    }))

    const onClickLike = (id) => {
        dispatch(toggleLike(id,isAuth))
    }

    return <LikeBlock countLikes={props.countLikes}
                      id={props.id}
                      likeInProgress={likeInProgress}
                      onClickLike={onClickLike}
                      isAuth={isAuth}

    />
};

export default ContainerLikeBlock;