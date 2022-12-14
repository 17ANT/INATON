import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';

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
  .back {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function UploadHeader() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderWrap>
        <Section>
          <button
            className="back"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src={`assets/icon/icon-arrow-left.png`} alt="" />
          </button>
          <CustomButton size="ms">왜....?</CustomButton>
        </Section>
      </HeaderWrap>
    </>
  );
}
