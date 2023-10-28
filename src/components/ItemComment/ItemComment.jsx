import React, {useState} from 'react';
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
import doInProgress from "../../helpers/methodSome";
import cookie from "../../helpers/cookieFunc.js";

const ItemComment = (props) => {
    const {
        author,
        text,
        likes,
        date,
        id,
        deleteCommentInProgress,
        onClickDeleteComment,

    } = props

    const token = cookie.take('token')
    const nameAuthUser = cookie.take('nameUser')
    const imageUserAuthUrl = cookie.take('imageUrl')

    console.log(imageUserAuthUrl)
    return (
        <Comment>
            <CommentHeader>
                <UserInfoBlock>
                    {!token ? null :
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
                {!token ? null :
                    (nameAuthUser === author.name ?
                        <button disabled={doInProgress(deleteCommentInProgress, id)}
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