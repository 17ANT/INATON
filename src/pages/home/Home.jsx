import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomePost from '../../components/homePost/HomePost';
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/customButton/CustomButton';
import CustomMainHeader from '../../components/header/CustomMainHeader';
import Feed from './FeedAPI';
import getMyProfile from '../../common/GetMyInfo';
import FeedList from '../../components/feedList/FeedList';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 68px 0 90px;
  min-height: 100vh;
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
  const [postLists, setPostList] = useState(null);
  const [userData, setUserData] = useState(null);
  const [searchActive, setSearchActive] = useState(false);

  async function getUser() {
    const userInfo = await getMyProfile();
    setUserData(userInfo.user);
  }

  async function showPostList() {
    const feedList = await Feed();
    setPostList(feedList.posts);
  }
  useEffect(() => {
    showPostList();
    getUser();
  }, []);

  function handleSearch() {
    setSearchActive(true);
  }

  return (
    <Container>
      <CustomMainHeader
        searchActive={searchActive}
        setSearchActive={setSearchActive}
      />
      {userData &&
        (userData.followingCount > 0 ? (
          // 팔로우가 있는경우
          <FeedList posts={postLists} />
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
              <CustomButton onClick={handleSearch} size="m">
                검색하기
              </CustomButton>
            </NoneFollowSection>
          </>
        ))}
      <NavBar />
    </Container>
  );
}
