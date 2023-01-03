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
  display: flex;
  justify-content: space-between;
  height: 48px;
  align-items: center;
  padding: 0 16px;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function BasicHeader({ onClick }) {
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
            <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-arrow-left.png`} alt="뒤로가기" />
          </button>
          <button onClick={onClick}>
            <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-more-vertical.png`} alt="더보기" />
          </button>
        </Section>
      </HeaderWrap>
    </>
  );
}
