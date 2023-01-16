import React from 'react';
import ChatHeader from '../../components/header/ChatHeader';
import NavBar from '../../components/navBar/NavBar';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import getFollower from './FollowerAPI';
import { useParams } from 'react-router-dom';
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
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    async function setFollowingList() {
      const followingList = await getFollower(params.accountname);
      setFollowers(followingList);
    }

    setFollowingList();
  }, []);

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
