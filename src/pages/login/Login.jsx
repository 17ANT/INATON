import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Splash from '../splash/Splash';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--main-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: hidden;
`;

const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 144px;
  transform: translateY(180px);
`;

const LoginArticle = styled.article`
  position: absolute;
  width: 100%;
  bottom: -20px;
  height: 362px;
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  flex-direction: column;
  padding: 50px 34px 20px;
  gap: 10px;
  .kakao-btn {
    border: 1px solid #f2c94c;
    :active {
      background-color: #f2c94c;
      color: #fff;
      img {
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
  .google-btn {
    border: 1px solid #767676;
    :active {
      background-color: #767676;
      color: #fff;
      img {
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
  .facebook-btn {
    border: 1px solid #2d9cdb;
    :active {
      background-color: #2d9cdb;
      color: #fff;
      img {
        background-color: #fff;
        border-radius: 50%;
      }
    }
  }
`;
const LoginButton = styled.button`
  position: relative;
  width: 322px;
  height: 44px;
  margin: 0 auto;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: transparent;
  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    color: var(--sub-fon);
  }
`;

const LoginLink = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
  margin-top: 20px;
  a {
    position: relative;
    font-weight: 400;
    font-size: 12px;
    color: var(--sub-font);
    text-decoration: none;
    :nth-child(1)::before {
      content: '';
      position: absolute;
      right: -15px;
      width: 1px;
      height: 15px;
      background-color: var(--sub-border);
    }
  }
`;

export default function Login() {
  return (
    <Container>
      <LogoImg src={process.env.PUBLIC_URL + `/assets/symbol-logo-W.png`} alt="" />
      <LoginArticle>
        <LoginButton className="kakao-btn">
          <img src={process.env.PUBLIC_URL + `/assets/message-circle.png`} alt="" />
          <span>카카오톡 계정으로 로그인</span>
        </LoginButton>
        <LoginButton className="google-btn">
          <img src={process.env.PUBLIC_URL + `/assets/google.png`} alt="" />
          <span>구글 계정으로 로그인</span>
        </LoginButton>
        <LoginButton className="facebook-btn">
          <img src={process.env.PUBLIC_URL + `/assets/facebook.png`} alt="페이스북으로 로그인" />
          <span>페이스북 계정으로 로그인</span>
        </LoginButton>
        <LoginLink>
          <Link to="/login/email">이메일로 로그인</Link>
          <Link to="/signup">회원가입</Link>
        </LoginLink>
      </LoginArticle>
    </Container>
  );
}
