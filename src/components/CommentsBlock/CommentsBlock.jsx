import React from 'react';
import {Comments} from "../../styled/main_styled_components.js";
import ItemComment from "../ItemComment/ItemComment.jsx";

const CommentsBlock = (props) => {
    const {comments, deleteCommentInProgress, onClickDeleteComment} = props
    return (
        <Comments>
            {comments.map((post) => <ItemComment {...post}
                                                 deleteCommentInProgress={deleteCommentInProgress}
                                                 onClickDeleteComment={onClickDeleteComment}
                />
            )}
        </Comments>
    );
};

export default CommentsBlock;