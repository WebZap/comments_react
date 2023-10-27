import React from 'react';
import {Comments} from "../../styled/main_styled_components.js";
import ItemComment from "../ItemComment/ItemComment.jsx";

const CommentsBlock = (props) => {
    const {comments,deleteCommentInProgress,onClickDeleteComment,isAuth,imageUserAuthUrl} = props
    return (
        <Comments>
            {/*РЕНДЕР СПИСКА КОММЕНТАРИЕВ*/}
            {comments.map((post) =>  <ItemComment {...post} imageUserAuthUrl={imageUserAuthUrl}nameAuthUser={props.nameAuthUser}isAuth={isAuth} deleteCommentInProgress={deleteCommentInProgress} onClickDeleteComment={onClickDeleteComment}/>)}
        </Comments>
    );
};

export default CommentsBlock;