import styled from "styled-components";

const PostElement = styled.article`
    padding: 2rem;
    background-color: white;
    box-shadow: 0 4px 16px rgba(125, 125, 125, 0.25);
    border-radius: 1rem;
    white-space: pre-line; /* 줄바꿈만 그대로 유지하면서 연속된 띄어쓰기와 들여쓰기를 무시 */
    margin-bottom: 1.25rem;
`;

const PostTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0;
    margin-bottom: 1rem;
`;

const PostContent = styled.p`
    margin-bottom: 0;
    color: #AFAFAF;
    font-size: 1rem;

`

const Post = ({title, content}) => {
    return (
        <PostElement>
            <PostTitle>{title}</PostTitle>
            <PostContent>{content}</PostContent>
        </PostElement>
    )
}

export default Post;