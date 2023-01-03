import React, { Children } from 'react';
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
  width: 100%;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  .back {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default function UploadHeader({ onClick, state, text }) {
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
            <img src={`${process.env.PUBLIC_URL}/assets/icon/icon-arrow-left.png`} alt="뒤로가기" />
          </button>
          <CustomButton state={state} size="ms" onClick={onClick}>
            {text}
          </CustomButton>
        </Section>
      </HeaderWrap>
    </>
  );
}

UploadHeader.defaultProps = {
  state: 'disabled',
};
