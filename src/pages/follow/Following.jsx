import React from 'react';
import ChatHeader from '../../components/header/ChatHeader';
import NavBar from '../../components/navBar/NavBar';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import getFollowing from './FollowingAPI';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

export default function Following() {
  const params = useParams();
  const navigate = useNavigate();

  const [followings, setFollowings] = useState(null);
  // const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    async function setFollowingList() {
      const followingList = await getFollowing(params.id);
      setFollowings(followingList);
    }

    setFollowingList();
  }, [params.id]);

  return (
    <>
      <ChatHeader text={'Following'} isMore={false} />
      {/* <Btn>팔로우목록</Btn> */}
      <StyledInlineProfileInfo>
        {followings &&
          followings.map((item, index) => (
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
