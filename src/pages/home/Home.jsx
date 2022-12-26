import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HomePost from '../../components/homePost/HomePost';
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/customButton/CustomButton';
import CustomMainHeader from '../../components/header/CustomMainHeader';
import Feed from './FeedAPI';

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
  const [postLists, setPostList] = useState(null);
  async function showPostList() {
    const feedList = await Feed();
    setPostList(feedList.posts);
  }
  useEffect(() => {
    showPostList();
  }, []);
  const [isFollow, setIsFollow] = useState(true);

  const postTest = {
    id: '01',
    content: '해피 크리스마스🎄',
    image: './assets/post-img-example.png,./assets/post-img-example.png',
    createdAt: '2022년 12월 22일',
    updatedAt: String,
    hearted: false,
    heartCount: 12341,
    commentCount: 12391,
    author: {
      _id: '작성자 id',
      username: '사용자이름룰루랄라',
      accountname: 'rudgus123',
      following: [],
      follower: ['follower id'],
      followerCount: 1,
      followingCount: 0,
    },
  };

  return (
    <Container>
      <CustomMainHeader />

      {isFollow ? (
        // 팔로우가 있는경우
        <HomePostList>
          <li>
            <HomePost data={postTest} />
          </li>
          {postLists &&
            postLists.map((item) => (
              <li key={item.id}>
                <HomePost data={postTest} />{' '}
              </li>
            ))}
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
