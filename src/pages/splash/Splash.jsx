import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import authCheck from '../../common/AuthenticationCheck';
import Login from '../login/Login';
const keyframeItemMove = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-50px);
    opacity: 1;
  }
`;
const Logo = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  img {
    animation: ${keyframeItemMove} 1.5s linear;
  }
`;

export default function Splash({ auth }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    setTimeout(() => {
      if (auth) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    }, 1500);
  }, [auth]);
  console.log(auth);

  return (
    <Logo>
      <img src={'/assets/inaton-logo.svg'} alt="IN AT ON" />
    </Logo>
  );
}
