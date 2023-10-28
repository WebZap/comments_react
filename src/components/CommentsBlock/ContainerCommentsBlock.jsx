import React, {useEffect} from 'react';
import CommentsBlock from "./CommentsBlock.jsx";
import {useDispatch, useSelector} from "react-redux";
import {deletePost, setListOfComments} from "../../redux/reducers/commentReducer/commentsReducer.js";
import cookie from "../../helpers/cookieFunc.js";

const ContainerCommentsBlock = (props) => {
    const dispatch = useDispatch();
    const {comments, deleteCommentInProgress} = useSelector(state => ({
            comments: state.comments.commentsArray,
            deleteCommentInProgress: state.comments.deleteCommentInProgress,
        })
    )

    const token = cookie.take('token')
    const onClickDeleteComment = (id) => {
        dispatch(deletePost(id, token))
    }
    useEffect(() => {
        dispatch(setListOfComments())
    }, [])

    return <CommentsBlock
        comments={comments}
        deleteCommentInProgress={deleteCommentInProgress}
        onClickDeleteComment={onClickDeleteComment}
    />;
};

export default ContainerCommentsBlock
