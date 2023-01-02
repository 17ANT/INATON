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
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 22px;
  }
  label {
    width: 100%;
    margin-left: 20px;
  }
  input {
    width: 100%;
    height: 32px;
    background-color: var(--bg-color);
    border-radius: 32px;
    border: none;
    padding: 7px 16px;
    font-size: 14px;
    line-height: 18px;
  }
`;

export default function SearchHeader() {
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
            <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-arrow-left.png`} alt="" />
          </button>
          <label htmlFor="searchInp">
            <input type="search" id="searchInp" placeholder="계정검색" />
          </label>
        </Section>
      </HeaderWrap>
    </>
  );
}
