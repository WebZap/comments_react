import React from 'react';
import {CenteredContainer, Container} from "./styled/main_styled_components.js";
import ContainerCommentsBlock from "./components/CommentsBlock/ContainerCommentsBlock.jsx";
import ContainerSendForm from "./components/SendForm/ContainerSendForm";


function App() {
    // useEffect(() => {
    //     deleteCookie()
    // }, [document.cookie])

    return (
        <CenteredContainer>
            <Container>
                <ContainerCommentsBlock/>
                <ContainerSendForm/>
            </Container>
        </CenteredContainer>
    );
}

export default App;