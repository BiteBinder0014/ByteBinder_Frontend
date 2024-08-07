// src/page/Header.jsx
import { Link } from 'react-router-dom';
import '../../css/main.css';
import Button from "../Button";
import {styled} from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 1.625rem;
`;

const HeaderNavContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1.625rem;
`;

const SearchInputContainer = styled.div`
    width: 16.25rem;
    height: 2.5rem;
    background-color: #EEEEEE;
    border-radius: 1.25rem;
    position: relative;
`;

const SearchInput = styled.input`
    width: calc(100% - 2rem);
    height: 100%;
    position: absolute;
    top: 0;
    left: 1rem;
    background-color: unset;
    border: none;
    outline: none;
`;

const Header = () => {
    return (
        <div className="center-container">
            <HeaderContainer className="Header">
                <HeaderNavContainer>
                    <Link to='/'>로고</Link>
                    <SearchInputContainer>
                        <SearchInput></SearchInput>
                    </SearchInputContainer>
                </HeaderNavContainer>
                <Button text={"로그인"} href={'/login'}></Button>
            </HeaderContainer>
        </div>
    )
}

export default Header;