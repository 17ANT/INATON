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

  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    async function setFollowingList() {
      const followingList = await getFollower(params.id);
      setFollowers(followingList);
    }

    setFollowingList();
  }, []);

  return (
    <>
      <ChatHeader text={'Follower'} isMore={false} />

      <StyledInlineProfileInfo>
        {followers &&
          followers.map((item) => (
            <div key={item._id}>
              <InlineProfileInfo
                img={item.image}
                name={item.username}
                desc={item.accountname}
                state="follow"
                onClick={() => {
                  navigate(`/yourprofilecopy/${item.accountname}`);
                }}
              />
              {item.isfollow ? (
                <CustomButton size="M" state="activ">
                  언팔로우
                </CustomButton>
              ) : (
                <CustomButton size="M" state="">
                  팔로우
                </CustomButton>
              )}
            </div>
          ))}
      </StyledInlineProfileInfo>

      {/*       <StyledInlineProfileInfo>
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
