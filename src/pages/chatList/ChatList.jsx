import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../../components/navBar/NavBar';
import BasicHeader from './../../components/header/BasicHeader';
import InlineProfileInfo from './../../components/inlineProfileInfo/InlineProfileInfo';

const ChatMain = styled.ul`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 390px;
  width: 100%;
  height: calc(100% - 108px);
  padding: 24px 16px;
  overflow-y: scroll;
  margin-top: 48px;
`;

const ChatItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  width: 390px;
  span {
    position: absolute;
    right: 0;
    bottom: 3px;
    font-weight: 400;
    font-size: 10px;
    line-height: 13px;
    color: #dbdbdb;
  }
`;

export default function ChatList() {
  const navigate = useNavigate();
  function movetoChatroom() {
    navigate(`/chatroom`);
  }
  return (
    <>
      <BasicHeader />
      <ChatMain>
        <ChatItem onClick={movetoChatroom}>
          {/* 넹 여기는 그냥 두겠습니다! */}
          <InlineProfileInfo
            img="./assets/basic-profile-img.png"
            name="아무개"
            desc="오늘 저녁 메뉴 추천 받아요"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem onClick={movetoChatroom}>
          <InlineProfileInfo
            img="./assets/post-img-example.png"
            name="멋진사자"
            desc="아 집에 가고싶다"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem onClick={movetoChatroom}>
          <InlineProfileInfo
            img="./assets/basic-profile-img.png"
            name=""
            desc="와 좋아보이네요? 어디인가요?"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem onClick={movetoChatroom}>
          <InlineProfileInfo
            img="./assets/post-img-example.png"
            name="채팅"
            desc="찬란한 빛에 눈이 멀어 꺼져가는데"
            state="chat"
          />
          <span>2022-12-15</span>
        </ChatItem>
      </ChatMain>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
