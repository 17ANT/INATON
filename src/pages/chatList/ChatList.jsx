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

  function movetoChatroom(user) {
    navigate(`/chatroom`, { state: { user: user } });
  }

  return (
    <>
      <BasicHeader />
      <ChatMain>
        <ChatItem onClick={() => movetoChatroom('피카피카')}>
          {/* 넹 여기는 그냥 두겠습니다! */}
          <InlineProfileInfo
            img=" https://api.mandarin.weniv.co.kr/Ellipse.png"
            name="피카피카"
            desc="새해 복 많이 받으세요"
            state="chat"
          />
          <span>2023-01-01</span>
        </ChatItem>
        <ChatItem onClick={() => movetoChatroom('멋진사자')}>
          <InlineProfileInfo
            img="https://api.mandarin.weniv.co.kr/Ellipse.png"
            name="멋진사자"
            desc="아 집에 가고싶다"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem onClick={() => movetoChatroom('자스민')}>
          <InlineProfileInfo
            img="https://api.mandarin.weniv.co.kr/Ellipse.png"
            name="자스민"
            desc="와 좋아보이네요? 어디인가요?"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem onClick={() => movetoChatroom('먹고자')}>
          <InlineProfileInfo
            img="https://api.mandarin.weniv.co.kr/Ellipse.png"
            name="먹고자"
            desc="위치 자세히 알려주세요 ㅠ"
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
