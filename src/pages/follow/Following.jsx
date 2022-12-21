import React from 'react';
import ChatHeader from '../../components/header/ChatHeader';
import NavBar from '../../components/navBar/NavBar';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import getFollowing from './FollowingAPI';
import { useState, useEffect } from 'react';

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
  const token = localStorage.getItem('token');
  const accountname = localStorage.getItem('accountname');

  const [followings, setFollowings] = useState(null);

  useEffect(() => {
    async function setFollowingList() {
      const followingList = await getFollowing(token, accountname);
      setFollowings(followingList);
    }

    setFollowingList();
  }, [accountname]);

  return (
    <>
      <ChatHeader text={'Following'} isMore={false} />
      {/* <Btn>팔로우목록</Btn> */}
      <StyledInlineProfileInfo>
        {followings &&
          followings.map((item) => (
            <div key={item._id}>
              <InlineProfileInfo
                name={item.username}
                desc={item.accountname}
                state="follow"
              />
              <CustomButton size="s" state="activ">
                취소
              </CustomButton>
            </div>
          ))}
      </StyledInlineProfileInfo>

      {/* <StyledInlineProfileInfo>
        <div>
          <InlineProfileInfo
            name="야롱"
            desc={'나는김지현이라네'}
            state="follow"
          />
          <CustomButton size="s" state="activ">
            취소
          </CustomButton>
        </div>
        <div>
          <InlineProfileInfo
            name="팔로우"
            desc={'사용자가 설정한 프로필 설명이 보이는 공간입니다.'}
            state="follow"
          />
          <CustomButton size="s">팔로우</CustomButton>
        </div>
        <div>
          <InlineProfileInfo
            name="팔로우"
            desc={'사용자가 설정한 프로필 설명이 보이는 공간입니다.'}
            state="follow"
          />
          <CustomButton size="s">팔로우</CustomButton>
        </div>
      </StyledInlineProfileInfo> */}
      <NavBar />
    </>
  );
}
