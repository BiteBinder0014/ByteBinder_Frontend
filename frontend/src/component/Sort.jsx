import { styled } from "styled-components";

const SortMenu = styled.button`
    font-size: 0.875rem;
    color: ${(props) => props.color === "true" ? "black" : "#AAAAAA"};
    background-color: unset;
    border: none;
    padding: 0;
    cursor: pointer;

    &:not(:last-child)::after {
        content: "|";
        margin: 0 1rem;
        color: black;
    } 
`;

const Sort = ({text, active, onclick}) => {
    return (
        <SortMenu onClick={onclick} color={active.toString()}>{text}</SortMenu>
    )
}

export default Sort;