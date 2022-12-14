import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navBar/NavBar';
import BasicHeader from './../../components/header/BasicHeader';

const ChatMain = styled.main`
  position: fixed;
  display: flex;
  justify-content: center;
  min-width: 390px;
  width: 100%;
  height: calc(100% - 108px);
  padding: 24px 16px;
  overflow-y: scroll;
  margin-top: 48px;
`;

const List = styled.ul`
  width: 100%;
  max-width: 390px;
  li {
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
  }
  li .user-profile {
    width: 42px;
    height: 42px;
    border: 0.5px solid var(--border-color);
    border-radius: 50%;
    margin-right: 12px;
  }
  .user-profile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .chat-info strong {
    display: block;
    color: var(--font-color);
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: 2px 0 4px 0;
  }
  .chat-info p {
    max-width: 238px;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--sub-font);
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .chat-date {
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
        <List>
          <li>
            <div className="user-profile">
              <img src={'assets/Ellipse 6.png'} alt="" />
            </div>
            <div className="chat-info">
              <strong>회원이름</strong>
              <p>
                채팅내용채팅내용채팅내용채팅내용채팅내용채팅내용채팅내용채팅내용채팅내용
              </p>
            </div>
            <strong className="chat-date">2022-12-12</strong>
          </li>
          <li>
            <div className="user-profile">
              <img src={'assets/Ellipse 6.png'} alt="" />
            </div>
            <div className="chat-info">
              <strong>회원이름</strong>
              <p>채팅내용</p>
            </div>
            <strong className="chat-date">2022-12-31</strong>
          </li>
        </List>
      </ChatMain>
      <footer>
        <NavBar />
      </footer>
    </>
  );
}
