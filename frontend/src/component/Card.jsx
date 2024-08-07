import {styled} from "styled-components";

const CardElement = styled.article`
    padding: 2rem;
    background-color: white;
    border-radius: 0.625rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 16px rgba(125, 125, 125, 0.25);
`;

const Card = ({CardContent}) => {
    return (
        <CardElement>
            {CardContent}
        </CardElement>
    )
}

export default Card;