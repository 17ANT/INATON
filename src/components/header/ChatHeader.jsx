import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderWrap = styled.header`
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
    line-height: 18px;
    margin-left: 10px;
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

export default function ChatHeader() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrap>
        <Section>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={`assets/icon/icon-arrow-left.png`} alt="" />
          </button>
          <h2>유저이름</h2>
          <button className="more">
            <img src={`assets/icon/icon-more-vertical.png`} alt="" />
          </button>
        </Section>
      </HeaderWrap>
    </>
  );
}
