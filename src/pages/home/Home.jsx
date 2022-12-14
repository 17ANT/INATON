import React, { useState } from 'react';
import styled from 'styled-components';
import HomePost from '../../components/homePost/HomePost';
import NavBar from '../../components/navBar/NavBar';
import MainHeader from './../../components/header/MainHeader';
import CustomButton from '../../components/customButton/CustomButton';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
`;

const NoneFollowSection = styled.div`
    border: 1px solid #000;
    /* overflow: hidden; */
    display: flex;
    transform: translateY(-50%);
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 181px;
    height: 198px;
    img {
        display: block;
        margin: 0 auto;
    }
    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
    }
`;

export default function Home() {
    const [isFollow, setIsFollow] = useState(false);

    return (
        <Container>
            <MainHeader />

            {isFollow ? (
                // 팔로우가 있는경우
                <HomePost />
            ) : (
                // 팔로우가 없는 경우
                <NoneFollowSection>
                    <h2 className="sr-only">팔로우가 없는 홈 페이지</h2>
                    <img
                        src="/assets/symbol-logo-gray.png
          "
                        alt=""
                    />
                    <p>유저를 검색해 팔로우 해보세요!</p>
                    <CustomButton size="L">검색하기</CustomButton>
                </NoneFollowSection>
            )}
            <NavBar />
        </Container>
    );
}
