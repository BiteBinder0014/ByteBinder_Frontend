import React, { useState } from 'react';
import { styled } from 'styled-components';
import "../css/main.css";
import Post from '../component/Post';
import { content, title } from '../component/postData';
import Sort from '../component/Sort';

const TodayPostContainer = styled.section`
    padding: 2rem 1.625rem;
    row-gap: 2rem;
`;

const MainPostsContainer = styled(TodayPostContainer)`
    row-gap: 1.25rem;
    display: grid;
`;

const TodayPostTitle = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
`;

const TodayPostImg = styled.img`
    width: 100%;
    height: 350px;
    background-color: #D9D9D9;
    border-radius: 1rem;
`;

const Main = () => {
    const sortList = ["최신순", "조회순"];
    const [currentSort, changeCurrentSort] = useState(0);

    return (
        <div className="Main center-container">
            <TodayPostContainer>
                <TodayPostTitle>오늘의 게시글</TodayPostTitle>
                <TodayPostImg></TodayPostImg>
            </TodayPostContainer>
            <MainPostsContainer>
                <div className='sort-menus'>
                    {sortList.map((sl, idx) => (
                        <Sort onclick={() => changeCurrentSort(idx)} text={sl} active={idx === currentSort ? true : false} key={sl + idx}></Sort>
                    ))}
                </div>
                <div className='posts-container'>
                    {title.map((t, idx) => (
                        <Post title={t} content={content[idx]} key={title + idx} />
                    ))}
                </div>
            </MainPostsContainer>
        </div>
    )
}

export default Main;