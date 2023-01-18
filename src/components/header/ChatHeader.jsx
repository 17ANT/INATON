import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ChatHeaderBox = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid var(--border-color);
  z-index: 4;
  background-color: #fff;
`;

const Section = styled.section`
  position: relative;
  display: flex;
  height: 48px;
  align-items: center;
  padding: 0 16px;

  h2 {
    font-size: 14px;
    line-height: 45px;
    height: 48px;
    margin-left: 8px;
    font-weight: bold;
    color: var(--font-color);
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  .more {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default function ChatHeader({ text, isMore, onClick }) {
  const navigate = useNavigate();

  return (
    <ChatHeaderBox text={text} isMore={isMore}>
      <Section>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-arrow-left.png`} alt="뒤로가기" />
        </button>
        <h2>{text}</h2>
        {isMore ? (
          <button className="more" onClick={onClick}>
            <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-more-vertical.png`} alt="더보기" />
          </button>
        ) : (
          <></>
        )}
      </Section>
    </ChatHeaderBox>
  );
}
