import React, { useRef } from 'react';
import styled from 'styled-components';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputTag from '../../components/Input/Input';

const LoginForm = styled.div`
  padding: 0 34px;
  width: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin: 30px 0 40px;
    font-weight: 700;
    font-size: 24px;
    color: var(--font-color);
    user-select: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 26px;
  span {
    position: absolute;
    left: 0;
    pointer-events: none;
    padding: 5px 0;
    margin: 10px 0;
    font-size: 1.1em;
    color: var(--sub-font);
    transition: 0.5s;
  }

  .active {
    border-bottom: 2px solid var(--main-color);
  }
  .active ~ span {
    color: var(--main-color);
    font-size: 0.9em;
    transform: translateY(-23px);
  }
`;

const SubmitBtn = styled.input`
  background-color: var(--main-color);
  color: #fff;
  width: 322px;
  margin: 30px 0 20px;
  height: 44px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  :active {
    background: rgba(168, 188, 147, 0.7);
  }
`;

const SignupLink = styled.a`
  color: var(--sub-font);
  text-decoration: none;
`;

export default function LoginEmail() {
  return (
    <LoginForm>
      <h2>로그인</h2>
      <Form action="">
        <InputBox>
          <InputTag type="email" required />
          <span>이메일</span>
        </InputBox>
        <InputBox>
          <InputTag type="password" name="" required />
          <span>비밀번호</span>
        </InputBox>
        <ErrorMessage text={'*이메일 또는 비밀번호가 일치하지 않습니다.'} />
        <SubmitBtn type="submit" value="로그인" />
      </Form>
      <SignupLink href="/signup">이메일로 회원가입</SignupLink>
    </LoginForm>
  );
}
