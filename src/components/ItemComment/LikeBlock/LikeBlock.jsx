import React from 'react';
import {LikeButton, Likes, LikesCounter} from "../../../styled/main_styled_components.js";
import doInProgress from "../../../helpers/methodSome.js";
import cookie from "../../../helpers/cookieFunc.js";

const LikeBlock = (props) => {
    const {countLikes, likeInProgress, id, onClickLike, isAuth} = props
    const token = cookie.take('token')

    return (
        <Likes>
            <LikesCounter>{countLikes}</LikesCounter>
            <LikeButton disabled={!token ? true : doInProgress(likeInProgress, id)
            } onClick={() => onClickLike(id)}/>
        </Likes>)
};

export default LikeBlock;