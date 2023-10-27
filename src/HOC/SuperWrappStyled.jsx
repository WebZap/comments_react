

const SuperWrappStyled = (StyledComponent) => {
    return ({input,type,placeholder}) => {
        return <StyledComponent {...input} type={type} placeholder={placeholder}/>
    }
}

export default  SuperWrappStyled;
