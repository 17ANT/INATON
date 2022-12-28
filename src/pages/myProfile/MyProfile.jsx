import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import BasicHeader from '../../components/header/BasicHeader';
import FollowCount from '../../components/followCount/FollowCount';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoText from '../../components/userInfoText/UserInfoText';
import CustomButton from '../../components/customButton/CustomButton';
import getMyProfile from '../../common/GetMyInfo';
import NavBar from '../../components/navBar/NavBar';
import ProfileFeed from './MyProfileFeedAPI';
import FeedList from '../../components/feedList/FeedList';

const MyProfileWrap = styled.div`
  margin: 0 auto 16px;
  padding-top: 50px;
  width: 100%;
  min-width: 358px;
  border-bottom: 3px solid var(--border-color);
`;

const ProfileHeader = styled.div`
  display: flex;
  margin: 0 auto;
  padding-top: 30px;
  justify-content: space-between;
  align-items: center;
  gap: 41px;
  width: 275px;
`;

const ProfileMain = styled.div`
  margin: 0 auto;
  padding-top: 16px;
  width: 358px;
`;

const ProfileButton = styled.div`
  margin: 0 auto;
  padding: 24px 0;
  width: 144px;
  text-align: center;
`;

const PostContainer = styled.div`
  min-height: fit-content;
  margin-bottom: 40px;
`;

export default function MyProfile() {
  const [myProfile, setMyProfile] = useState();
  const [myFeed, setMyFeed] = useState([]);
  const navigate = useNavigate();

  const accountname = localStorage.getItem('accountname');

  useEffect(() => {
    async function handleProfile() {
      const myProfileData = await getMyProfile();
      setMyProfile(myProfileData.user);
    }
    handleProfile();
    getFeed();
  }, []);

  async function getFeed() {
    const res = await ProfileFeed(accountname);
    setMyFeed(res.post);
  }

  function goFollower() {
    navigate(`/profile/${accountname}/follower`);
  }
  function goFollowing() {
    navigate(`/profile/${accountname}/following`);
  }
  return (
    <>
      <BasicHeader></BasicHeader>
      {myProfile && (
        <MyProfileWrap>
          <ProfileHeader>
            <FollowCount
              count={myProfile.followerCount}
              kind="followers"
              onClick={goFollower}></FollowCount>
            <ProfileImg
              size="110px"
              src={myProfile.image}
              alt="profile image"></ProfileImg>
            <FollowCount
              count={myProfile.followingCount}
              kind="followings"
              onClick={goFollowing}></FollowCount>
          </ProfileHeader>

          <ProfileMain>
            <UserInfoText
              userName={myProfile.username}
              userId={`@ ${myProfile.accountname}`}
              userDesc={myProfile.intro}></UserInfoText>
          </ProfileMain>

          <ProfileButton>
            <Link to="/myprofile/modification">
              <CustomButton size="M" state="activ">
                프로필 수정
              </CustomButton>
            </Link>
          </ProfileButton>
        </MyProfileWrap>
      )}
      {/* 여긴가요?? */}
      <PostContainer>
        <FeedList posts={myFeed} />
      </PostContainer>

      <NavBar />
    </>
  );
}
