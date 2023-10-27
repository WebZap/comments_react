import React, {useEffect} from 'react';
import CommentsBlock from "./CommentsBlock.jsx";
import {connect, useDispatch, useSelector} from "react-redux";
import {deletePost, setListOfComments} from "../../redux/reducers/commentReducer/commentsReducer.js";

const ContainerCommentsBlock = (props) => {
    // const {comments} = props
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments.commentsArray);
    const deleteCommentInProgress = useSelector(state => state.comments.deleteCommentInProgress)
    const isAuth = useSelector(state => state.auth.user.isAuth);
    debugger
    const nameAuthUser = useSelector(state => state.auth.user.name);
    const imageUserAuthUrl = useSelector(state => state.auth.user.imageUrl)



    const onClickDeleteComment = (id) => {
        dispatch(deletePost(id,isAuth))
    }

    useEffect(()=>{
        dispatch(setListOfComments())
        // setListOfComments()
    },[])
  return <CommentsBlock imageUserAuthUrl={imageUserAuthUrl}nameAuthUser={nameAuthUser} isAuth={isAuth} comments={comments} deleteCommentInProgress={deleteCommentInProgress} onClickDeleteComment={onClickDeleteComment}/>;
};

// const mapStateToProps = (state) => {
//     return {
//      comments: state.comments.commentsArray
//     }
// }
export default  ContainerCommentsBlock
// export default connect(mapStateToProps,{setListOfComments})(ContainerCommentsBlock);