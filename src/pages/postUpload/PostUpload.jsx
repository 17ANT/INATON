import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    height: 48px;
    background-color: #ff9191;
`;
const PostUploadMain = styled.main`
    display: flex;
    height: 100%;
    background-color: royalblue;
`;

export default function PostUpload() {
    return (
        <>
            <Header />
            <PostUploadMain></PostUploadMain>
        </>
    );
}
