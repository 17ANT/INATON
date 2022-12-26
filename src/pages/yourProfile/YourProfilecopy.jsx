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
import Follower from '../follow/Follower';
import Follow from '../follow/FollowAPI';

const YourProfileWrap = styled.div`
  margin: 0 auto;
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

export default function YourProfilecopy() {
  const params = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    async function handleProfile() {
      const userProfileData = await getProfile(params.id);
      setUserProfile(userProfileData.profile);
    }
    handleProfile();
  }, []);

  function goFollower() {
    navigate(`/profile/${params.id}/follower`);
  }
  function goFollowing() {
    navigate(`/profile/${params.id}/following`);
  }
  const fixFollow = () => {
    Follow(params.id);
  };
  return (
    <>
      <BasicHeader></BasicHeader>
      {userProfile ? (
        <YourProfileWrap>
          <ProfileHeader>
            <FollowCount
              count={userProfile.followerCount}
              kind="followers"
              onClick={goFollower}
            ></FollowCount>
            <ProfileImg
              size="110px"
              src={userProfile.image}
              alt="profile image"
            ></ProfileImg>
            <FollowCount
              count={userProfile.followingCount}
              kind="followings"
              onClick={goFollowing}
            ></FollowCount>
          </ProfileHeader>

          <ProfileMain>
            <UserInfoText
              userName={userProfile.username}
              userId={`@ ${params.id}`}
              userDesc={userProfile.intro}
            ></UserInfoText>
          </ProfileMain>

          <ProfileButton>
            <Link to="/">
              <ImageButton
                size="34px"
                src="/assets/icon/icon-message-circle.png"
                alt="message"
              ></ImageButton>
            </Link>
            {userProfile.isfollow ? (
              <CustomButton size="M" state="activ">
                언팔로우
              </CustomButton>
            ) : (
              <CustomButton size="M" state="" onClick={fixFollow}>
                팔로우
              </CustomButton>
            )}

            <Link to="/">
              <ImageButton
                size="34px"
                src="/assets/icon/icon-share.png"
                alt="message"
              ></ImageButton>
            </Link>
          </ProfileButton>
        </YourProfileWrap>
      ) : (
        <></>
      )}
      <NavBar />
    </>
  );
}
