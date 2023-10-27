import React, {useEffect} from 'react';
import {CenteredContainer, Container} from "./styled/main_styled_components.js";
import ContainerCommentsBlock from "./components/CommentsBlock/ContainerCommentsBlock.jsx";
import ContainerSendForm from "./components/SendForm/ContainerSendForm";
import Login from "./pages/Login_Registration/Login/Login.jsx";
import Registration from "./pages/Login_Registration/Registration/Registation";
import deleteCookie from "./helpers/deleteCookie.js";


function App() {
    useEffect(() => {
        deleteCookie()
    }, [document.cookie])

    return (
        <CenteredContainer>
            <Container>
                <ContainerCommentsBlock/>
                <ContainerSendForm/>
                <Registration/>
                <Login/>
            </Container>
        </CenteredContainer>
    );
}

export default App;