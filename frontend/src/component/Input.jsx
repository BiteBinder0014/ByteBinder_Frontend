import {styled} from "styled-components";

const InputContainer = styled.div`
margin-bottom: 1rem`;

const CommonInput = styled.input`
    border-radius: .5rem;
    border: 1px solid #D9D9D9;
    padding: 0.75rem 1rem;
    width: 100%;
    box-sizing: border-box;
`;

const InputTitle = styled.p`
    font-size: 1.125rem;
    margin-bottom: 1rem;
`;

const InputElement = ({title}) => {
    return (
        <InputContainer>
            <InputTitle>{title}</InputTitle>
            <CommonInput />
        </InputContainer>
    )
}

export default InputElement;