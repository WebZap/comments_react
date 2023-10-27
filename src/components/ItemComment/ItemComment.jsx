import React from 'react';
import {
    AuthorName,
    Comment,
    CommentBody,
    CommentHeader,
    CommentText,
    UserIcon,
    UserInfoBlock
} from "../../styled/main_styled_components.js";
import moment from "moment";
import ContainerLikeBlock from "./LikeBlock/ContainerLikeBlock";
import logoNoAuthUser from "../../assets/img/userNoAuth.png"

const ItemComment = (props) => {
    const {
        author,
        text,
        likes,
        date,
        id,
        deleteCommentInProgress,
        onClickDeleteComment,
        isAuth,
        nameAuthUser,
        imageUserAuthUrl
    } = props
    console.log(imageUserAuthUrl)
    return (
        <Comment>
            <CommentHeader>
                <UserInfoBlock>
                    {!isAuth ? null :
                        (nameAuthUser === author.name ?
                            <UserIcon image={imageUserAuthUrl}/>
                            :
                            <UserIcon image={logoNoAuthUser}/>)
                    }

                    <AuthorName>
                        <div>{author.name}</div>
                    </AuthorName>

                </UserInfoBlock>
                <div>{moment(date).format('DD.MM.YY h:mm:ss')}</div>
            </CommentHeader>
            <CommentBody>
                <CommentText>{text}</CommentText>
            </CommentBody>
            <div style={{display: "flex", gap: "30px"}}>
                <ContainerLikeBlock countLikes={likes} id={id}/>
                {!isAuth ? null :
                    (nameAuthUser === author.name ?
                        <button disabled={deleteCommentInProgress.some(item => item === id)}
                                onClick={() => onClickDeleteComment(id)}>
                            Удалить
                        </button> : null)
                }
            </div>
            {}

        </Comment>
    );
};

export default ItemComment;