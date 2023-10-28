import styled from "styled-components";

export const Container = styled.div`

  font-family: Helvetica;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 200px;
  background: #202020;
  min-height: 100vh;
`;

export const Comments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  justify-content: center;
  width: 100%;
`;

export const Comment = styled.li`
  width: 596px;
  box-sizing: border-box;
  background: radial-gradient(75.42% 75.42% at 50% 42.37%,
  rgba(53, 53, 53, 0) 22.92%,
  #7334ea 100%);
  filter: drop-shadow(0px 20px 67px rgba(0, 0, 0, 0.08));
  border-radius: 20px;
  padding: 48px;
`;

export const CommentHeader = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
`;

export const CommentBody = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const CommentText = styled.div`
  font-size: 32px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-left: 10px;
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M11.11 16.9482L11 17.0572L10.879 16.9482C5.654 12.2507 2.2 9.14441 2.2 5.99455C2.2 3.81471 3.85 2.17984 6.05 2.17984C7.744 2.17984 9.394 3.26975 9.977 4.75204H12.023C12.606 3.26975 14.256 2.17984 15.95 2.17984C18.15 2.17984 19.8 3.81471 19.8 5.99455C19.8 9.14441 16.346 12.2507 11.11 16.9482ZM15.95 0C14.036 0 12.199 0.882834 11 2.26703C9.801 0.882834 7.964 0 6.05 0C2.662 0 0 2.6267 0 5.99455C0 10.1035 3.74 13.4714 9.405 18.5613L11 20L12.595 18.5613C18.26 13.4714 22 10.1035 22 5.99455C22 2.6267 19.338 0 15.95 0Z' fill='%23BCEC30' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  width: 22px;
  height: 22px;
`;

export const LikesCounter = styled.span`
  font-size: 26px;
  margin-right: 8px;
`;

export const ActiveLikeButton = styled(LikeButton)`
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='20' viewBox='0 0 22 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.95 0C14.036 0 12.199 0.882834 11 2.26703C9.801 0.882834 7.964 0 6.05 0C2.662 0 0 2.6267 0 5.99455C0 10.1035 3.74 13.4714 9.405 18.5613L11 20L12.595 18.5613C18.26 13.4714 22 10.1035 22 5.99455C22 2.6267 19.338 0 15.95 0Z' fill='%23BCEC30'/%3E%3C/svg%3E");
`;

export const AddForm = styled.form`
  padding: 20px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
`;

export const AddFormName = styled.input`
  font-size: 16px;
  font-family: Helvetica;
  border-radius: 8px;
  border: none;
  width: 300px;
  padding: 11px 22px;
`;

export const AddFormText = styled.textarea`
  font-size: 16px;
  font-family: Helvetica;
  border-radius: 8px;
  border: none;
  margin-top: 12px;
  padding: 22px;
  resize: none;
`;

export const AddFormRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddFormButton = styled.button`
  width: 150px;
  margin-top: 24px;
  font-size: 24px;
  padding: 10px 20px;
  background-color: #bcec30;
  border: none;
  border-radius: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const LogoutButton = styled.button`
  width: 150px;
  margin-top: 24px;
  font-size: 24px;
  padding: 10px 20px;
  background-color: #ff4747;
  border: none;
  border-radius: 18px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
export const CenteredContainer = styled.div`
  background-color: #202020;
  display: flex;
  justify-content: center;
  width: 100vw;
`

export const UserIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  background-position: center;
  object-fit: contain;
  background-image: url(${({image}) => image });
  background-size: contain;
`

export const UserInfoBlock = styled.div`
  display: flex;
  gap: 20px;
`

export const AuthorName = styled.div`
  display: flex;
  align-items: center;
`

export const WrappButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const WhiteText = styled.p`
  margin: 0;
  padding: 0;
  color: white;
  font-size: ${({ textsize }) => textsize}px;;
`

