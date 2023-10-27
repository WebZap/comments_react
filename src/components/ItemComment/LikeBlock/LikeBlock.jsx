import React from 'react';
import {LikeButton, Likes, LikesCounter} from "../../../styled/main_styled_components.js";

const LikeBlock = (props) => {
    const {countLikes, likeInProgress, id, onClickLike, isAuth} = props
    return (
        <Likes>
            <LikesCounter>{countLikes}</LikesCounter>
            <LikeButton disabled={!isAuth ? true : likeInProgress.some(item => item === id)
            } onClick={() => onClickLike(id)}/>
        </Likes>)
};

export default LikeBlock;