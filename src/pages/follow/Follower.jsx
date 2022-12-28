import React from 'react';
import ChatHeader from '../../components/header/ChatHeader';
import NavBar from '../../components/navBar/NavBar';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import { useState, useEffect } from 'react';
import getFollower from './FollowerAPI';
import { useParams, useNavigate } from 'react-router-dom';
import Follow from './FollowAPI';
import UnFollow from './UnFollowAPI';
import InlineProfileFollow from '../../components/inLineProfileFollow/InlineProfileFollow';

const StyledInlineProfileInfo = styled.div`
  margin: 48px auto;
  padding: 25px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 390px;
  div {
    display: flex;
    justify-content: space-between;

    div p {
      width: 228px;
    }
    button {
      align-self: center;
      font-size: 12px;
    }
  }
`;

export default function Follower() {
  const params = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState();
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    async function setFollowingList() {
      const followingList = await getFollower(params.accountname);
      setFollowers(followingList);
    }

    setFollowingList();
  }, []);
  async function changeFollow() {
    // 팔로우 버튼 기능 (팔로우 토글)
    // setIsFollow((prev) => !prev);
    console.log(params);
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
      <ChatHeader text={'Follower'} isMore={false} />

      <StyledInlineProfileInfo>
        {followers &&
          followers.map((item, index) => (
            <div key={index}>
              <InlineProfileFollow item={item} />
              {/* item의 id 값이 내 아이디랑 같을 떄는 출력하지 않는다 */}
            </div>
          ))}
      </StyledInlineProfileInfo>
      <NavBar />
    </>
  );
}
