import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navBar/NavBar';
import CustomButton from '../../components/customButton/CustomButton';
import CustomMainHeader from '../../components/header/CustomMainHeader';
import FeedList from '../../components/feedList/FeedList';
import getAPI from '../../common/GetAPI';

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  const [target, setTarget] = useState(null);
  const [postLists, setPostLists] = useState([]);
  const [userData, setUserData] = useState(null);
  const [searchActive, setSearchActive] = useState(false);
  const steps = useRef(10);

  async function getUser() {
    const userInfo = await getAPI(`/user/myinfo`);
    setUserData(userInfo.user);
  }

  async function showPostList() {
    const feedList = await getAPI(`/post/feed/?limit=10&skip=0`);
    setPostLists(postLists.concat(feedList.posts));
  }

  // 추가 아이템 가져오기
  const getMoreItem = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 1500));
    let newData = await getAPI(`/post/feed/?limit=10&skip=${steps.current}`);
    setPostLists((prev) => prev.concat(newData.posts));
    steps.current += 10;
  };

  // Intersect
  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting) {
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  // useEffect
  useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.4,
      });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  useEffect(() => {
    showPostList();
    getUser();
  }, []);

  function handleSearch() {
    setSearchActive(true);
  }

  return (
    <Container>
      <CustomMainHeader searchActive={searchActive} setSearchActive={setSearchActive} />
      {userData &&
        (userData.followingCount > 0 ? (
          // 팔로우가 있는경우
          postLists && (
            <>
              <FeedList posts={postLists} />
              <div ref={setTarget}></div>
            </>
          )
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
