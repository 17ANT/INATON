import React from 'react';
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
  return (
    <>
      <BasicHeader />
      <ChatMain>
        <ChatItem>
          {/* 넹 여기는 그냥 두겠습니다! */}
          <InlineProfileInfo
            img="./assets/basic-profile-img.png"
            name="채팅"
            desc="난 지금 행복해 그래서 불안해 폭풍 전 바다는 늘 고요하니까"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem>
          <InlineProfileInfo
            img="./assets/post-img-example.png"
            name="채팅"
            desc="불이 붙어 빨리 타면 안 되잖아
            나는 사랑을 응원해"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem>
          <InlineProfileInfo
            img="./assets/basic-profile-img.png"
            name="채팅"
            desc="젊은 우리, 나이테는 잘 보이지 않고"
            state="chat"
          />
          <span>2022-12-18</span>
        </ChatItem>
        <ChatItem>
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
