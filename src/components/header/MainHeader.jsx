import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  h1 {
    color: var(--font-color);
    font-weight: bold;
    font-size: 18px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    a {
      background: url('assets/icon/icon-search.png') no-repeat center / 24px
        24px;
      display: block;
      width: 24px;
      height: 24px;
    }
  }
`;

export default function MainHeader() {
  return (
    <>
      <HeaderWrap>
        <Section>
          <h1>INATON 피드</h1>
          <button>
            <Link to="/search"></Link>
          </button>
        </Section>
      </HeaderWrap>
    </>
  );
}
