import React, { useState } from 'react';
import { styled } from 'styled-components';
import "../css/main.css";
import Card from '../component/Card';
import InputElement from '../component/Input';
import Button from "../component/Button";

const LoginBg = styled.div`
    background-color: #EFEFEF;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardMaxWidth = styled.div`
    width: 100%;
    max-width: 28.125rem;
`;

const LoginTitle = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    margin-bottom: 1.875rem;
    text-align: center;
`;

const InputsWrap = styled.div`
    margin-bottom: 3.313rem;
`;

const FindText = styled.p`
    color: #b3b3b3;
    font-size: 0.75rem;
    text-align: center;
    margin-top: 1.125rem;
`;

const Main = () => {
    const sortList = ["최신순", "조회순"];
    const [currentSort, changeCurrentSort] = useState(0);

    return (
        <LoginBg className="Login">
            <CardMaxWidth>
                <LoginTitle>로그인</LoginTitle>
                <Card CardContent={
                    <>
                        <InputsWrap>
                            <InputElement title={'아이디'} />
                            <InputElement title={'비밀번호'} />
                        </InputsWrap>

                        <Button text={'로그인'} />
                        <FindText>
                            <span>아이디 찾기</span> | <span>비밀번호 찾기</span>
                        </FindText>
                    </>
                } />
            </CardMaxWidth>
        </LoginBg>
    )
}

export default Main;