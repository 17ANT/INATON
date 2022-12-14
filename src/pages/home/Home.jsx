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
  padding: 68px 0 90px;
  min-height: 100vh;
  box-sizing: border-box;
`;

const HomePostList = styled.ul`
  min-height: calc(100vh - 158px);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NoneFollowSection = styled.div`
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
        <HomePostList>
          <HomePost />
          <HomePost />
          <HomePost />
          <HomePost />
          <HomePost />
          <HomePost />
          <HomePost />
        </HomePostList>
      ) : (
        // 팔로우가 없는 경우
        <>
          <NoneFollowSection>
            <h2 className="sr-only">팔로우가 없는 홈 페이지</h2>
            <img
              src="/assets/symbol-logo-gray.png
            "
              alt=""
            />
            <p>유저를 검색해 팔로우 해보세요!</p>
            <CustomButton size="m">검색하기</CustomButton>
          </NoneFollowSection>
        </>
      )}
      <NavBar />
    </Container>
  );
}
