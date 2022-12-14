import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomButton from './../../components/customButton/CustomButton';

const NotFoundMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 158px;
    height: 158px;
    margin: 200px 0 30px;
  }
  p {
    margin: 0 0 20px;
    color: var(--sub-font);
  }
`;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <NotFoundMain>
        <img src={'/assets/icon/icon-404.png'} alt="" />
        <p>페이지를 찾을 수 없습니다!</p>
        <CustomButton
          size="m"
          onClick={() => {
            navigate(-1);
          }}
        >
          이전페이지
        </CustomButton>
      </NotFoundMain>
    </>
  );
}
