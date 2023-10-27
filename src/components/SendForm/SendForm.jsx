import React from 'react';
import {
    AddForm,
    AddFormButton,
    AddFormName,
    AddFormRow,
    AddFormText,
    LogoutButton
} from "../../styled/main_styled_components.js";
import {Field, reduxForm} from "redux-form";

const SendForm = (props) => {
    const {handleSubmit, onExitClick} = props;
    return (
        <AddForm onSubmit={handleSubmit}>
            <AddFormName
                disabled="true"
                type="text"

                placeholder={props.name}
            />
            <Field
                type='text'
                name="text"
                component="textarea"
                placeholder="Введите ваш коментарий"
                rows="4"
            />
            <AddFormRow>
                <AddFormButton>Написать</AddFormButton>
                <LogoutButton onClick={(e) => onExitClick(e)}>Выйти</LogoutButton>
            </AddFormRow>
        </AddForm>
    );
};


const ReduxSendForm = reduxForm({
    form: "message",
})(SendForm);

export default ReduxSendForm