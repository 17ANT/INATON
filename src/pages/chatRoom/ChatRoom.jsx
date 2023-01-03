import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChatHeader from './../../components/header/ChatHeader';

const Main = styled.main`
  position: fixed;
  width: 100%;
  background-color: var(--bg-color);
  height: calc(100% - 48px);
  overflow-y: scroll;
`;
const ChatRoomWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 16px;
  margin-top: 48px;
`;
const MyMsg = styled.section`
  display: flex;
  position: relative;
  margin-bottom: 9px;
  align-self: flex-end;

  div {
    display: flex;
    flex-direction: row-reverse;
    gap: 6px;

    p {
      background-color: var(--main-color);
      border: none;
      border-radius: 10px 0 10px 10px;
      color: #fff;
      padding: 12px;
      max-width: 240px;
      line-height: 1.2;
    }
    strong {
      font-size: 10px;
      line-height: 13px;
      color: var(--sub-font);
      align-self: flex-end;
    }
    img {
      border-radius: 10px;
      height: 240px;
    }
  }
`;
const YourMsg = styled.section`
  display: flex;
  position: relative;
  margin-bottom: 9px;

  img {
    margin-right: 12px;
  }
  div {
    display: flex;
    gap: 6px;

    p {
      background-color: #fff;
      border: 1px solid var(--border-color);
      border-radius: 0 10px 10px 10px;
      color: var(--font-color);
      padding: 12px;
      max-width: 240px;
      line-height: 1.2;
    }
    strong {
      font-size: 10px;
      line-height: 13px;
      color: var(--sub-font);
      align-self: flex-end;
    }
    img {
      border-radius: 10px;
      height: 240px;
    }
  }
`;

const MsgInput = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  border: 1px solid var(--border-color);
  form {
    display: flex;
    padding: 0 16px;
    align-items: center;
    height: 60px;
    .img-upload {
      cursor: pointer;
    }
    .msg-input {
      width: calc(100% - 98px);
      border: none;
      outline: none;
      margin-left: 18px;
      font-size: 1.05em;
      letter-spacing: 0.05em;
    }
    button {
      border: none;
      color: var(--sub-font);
      font-size: 14px;
      line-height: 18px;
      background-color: transparent;
      cursor: pointer;
    }
  }
`;

export default function ChatRoom() {
  const location = useLocation();
  const username = location.state.user;
  return (
    <>
      <ChatHeader text={username} isMore={true} />
      <Main>
        <ChatRoomWrap>
          <MyMsg>
            <h3 className="sr-only">메시지</h3>
            <div>
              <p>안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</p>
              <strong>13:49</strong>
            </div>
          </MyMsg>
          <YourMsg>
            <h3 className="sr-only">메시지</h3>
            <a href="#">
              <img src={`${process.env.PUBLIC_URL}/assets/Ellipse 6.png`} alt="" />
            </a>
            <div>
              <p>네 안녕하세요</p>
              <strong> 14:00</strong>
            </div>
          </YourMsg>
          <YourMsg>
            <h3 className="sr-only">메시지</h3>
            <Link to="#">
              <img src={`${process.env.PUBLIC_URL}/assets/Ellipse 6.png`} alt="" />
            </Link>
            <div>
              <p>네 안녕하세요 대답하시라구요 아 진짜 아놔 왜 답을 안하세요 제발요</p>
              <strong> 14:00</strong>
            </div>
          </YourMsg>
          <MyMsg>
            <h3 className="sr-only">메시지</h3>
            <div>
              <p>어쩔티비</p>
              <strong>13:49</strong>
            </div>
          </MyMsg>
          <MyMsg>
            <h3 className="sr-only">메시지</h3>
            <div>
              <img src={`${process.env.PUBLIC_URL}/assets/chat-exapmle.png`} alt="" />
              <strong>13:49</strong>
            </div>
          </MyMsg>
        </ChatRoomWrap>
      </Main>
      <MsgInput>
        <h2 className="sr-only">채팅입력창</h2>
        <form>
          <label htmlFor="imgUpload" className="img-upload">
            <img src={process.env.PUBLIC_URL + '/assets/img-button.png'} alt="이미지 업로드" />
          </label>
          <input type="file" id="imgUpload" className="sr-only" />
          <label htmlFor="msgInput" className="sr-only">
            메시지창
          </label>
          <input className="msg-input" type="text" placeholder="메시지를 입력하세요" />
          <button>전송</button>
        </form>
      </MsgInput>
    </>
  );
}
