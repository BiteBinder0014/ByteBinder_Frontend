import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledButton = styled.button`
    padding: 1rem;
    background-color: #4E3E40;
    border-radius: 0.625rem;
    color: white;
`

const StyledDiv = styled.div`
    padding: 1rem;
    background-color: #4E3E40;
    border-radius: 0.625rem;
    color: white;
`

const Button = ({text, href}) => {
    return (
        <>
            {href ?
                <StyledDiv>
                <Link to={href}>{text}</Link>
            </StyledDiv> : <StyledButton>{text}</StyledButton>}
        </>
    )
}

export default Button;