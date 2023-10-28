import styled from "styled-components";
import {Link} from "react-router-dom";

export const CenteredContainer = styled.div`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: black;
`;

export const BgModal = styled.div`
  background: rgba(0, 0, 0, 0.7);
  display: block;
`;

export const LoginContainer = styled.div`
  background: radial-gradient(87.42% 75.42% at 50% 42.37%, rgb(0 0 0) 2.92%, #7334ea 88%);
  border-radius: 35px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 300px;
`;

export const LoginTitle = styled.h2`
  color: #ffffff;
  font-family: Inter;
  margin-bottom: 10px;
`;

export const LoginForm = styled.form`
  font-family: Inter;
  display: flex;
  flex-direction: column;
`;

export const LoginLabel = styled.label`
  color: #ffffff;
  font-family: Inter;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const LoginInput = styled.input`
  color: #000000;
  font-family: Inter;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 30px;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #bcec30;
  font-family: Inter;
  transition: .5s;
  color: #000000;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #88a62f;
  }
`;


export const LinkButton = styled(Link)`
  color: #ffffff;
  background-color: #bcec30;
  font-family: Inter;
  transition: .5s;
  color: #000000;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #88a62f;
  }
`