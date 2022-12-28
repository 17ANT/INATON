import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams, useNavigate } from 'react-router-dom';
import BasicHeader from '../../components/header/BasicHeader';
import FollowCount from '../../components/followCount/FollowCount';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoText from '../../components/userInfoText/UserInfoText';
import CustomButton from '../../components/customButton/CustomButton';
import { ImgButton } from '../../components/imageButton/ImageButton';
import NavBar from './../../components/navBar/NavBar';
import getProfile from './ProfileAPI';
import Follow from '../follow/FollowAPI';
import UnFollow from '../follow/UnFollowAPI';
import ProfileFeed from '../myProfile/MyProfileFeedAPI';
import FeedList from '../../components/feedList/FeedList';

const YourProfileWrap = styled.div`
  margin: 0 auto 16px;
  padding-top: 50px;
  width: 100%;
  min-width: 358px;
  border-bottom: 6px solid var(--border-color);
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
  display: flex;
  margin: 0 auto;
  padding: 24px 0;
  width: 208px;
  text-align: center;
  justify-content: space-between;
  gap: 10px;
`;

const ImageButton = styled(ImgButton)`
  padding: 9px;
  border: 1px solid var(--border-color);
`;

const PostContainer = styled.div`
  min-height: fit-content;
  margin-bottom: 80px;
`;

export default function YourProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState();
  const [isFollow, setIsFollow] = useState(false);
  const [myFeed, setMyFeed] = useState([]);
  const accountname = localStorage.getItem('accountname');

  useEffect(() => {
    async function handleProfile() {
      const userProfileData = await getProfile(params.accountname);
      setUserProfile(userProfileData.profile);
    }
    handleProfile();
    getFeed();
  }, []);

  async function getFeed() {
    const res = await ProfileFeed(params.accountname);
    setMyFeed(res.post);
  }

  function goFollower() {
    navigate(`/profile/${params.accountname}/follower`);
  }
  function goFollowing() {
    navigate(`/profile/${params.accountname}/following`);
  }
  async function changeFollow() {
    // 팔로우 버튼 기능 (팔로우 토글)
    setIsFollow((prev) => !prev);
    if (userProfile.isfollow) {
      // 언팔로우 API
      const res = await UnFollow(params.accountname);
      setUserProfile(res.profile);
    } else {
      // 팔로우 API
      const res = await Follow(params.accountname);
      setUserProfile(res.profile);
    }
  }

  return (
    <>
      <BasicHeader></BasicHeader>
      {userProfile && (
        <YourProfileWrap>
          <ProfileHeader>
            <FollowCount
              count={userProfile.followerCount}
              kind="followers"
              onClick={goFollower}></FollowCount>
            <ProfileImg
              size="110px"
              src={userProfile.image}
              alt="profile image"></ProfileImg>
            <FollowCount
              count={userProfile.followingCount}
              kind="followings"
              onClick={goFollowing}></FollowCount>
          </ProfileHeader>

          <ProfileMain>
            <UserInfoText
              userName={userProfile.username}
              userId={`@ ${params.accountname}`}
              userDesc={userProfile.intro}></UserInfoText>
          </ProfileMain>

          {/* 여기서부터 수정시작  */}

          <ProfileButton>
            <Link to="/chatroom">
              <ImageButton
                size="34px"
                src="/assets/icon/icon-message-circle.png"
                alt="message"></ImageButton>
            </Link>
            {/* 버튼이 클릭되었을 때 ~.isFollow가 true면 언팔로우 API, false면 팔로우API 실행 */}
            {userProfile.isfollow ? (
              <CustomButton size="M" state="activ" onClick={changeFollow}>
                언팔로우
              </CustomButton>
            ) : (
              <CustomButton size="M" state="" onClick={changeFollow}>
                팔로우
              </CustomButton>
            )}

            <Link to="/">
              <ImageButton
                size="34px"
                src="/assets/icon/icon-share.png"
                alt="message"></ImageButton>
            </Link>
          </ProfileButton>

          {/*  여기까지 */}
        </YourProfileWrap>
      )}
      <PostContainer>
        <FeedList posts={myFeed} />
      </PostContainer>
      <NavBar />
    </>
  );
}
