import React from 'react';
import styled from 'styled-components';

// const One = styled.div`
//   color: red;
// `;

const LoginForm = styled.div`
  padding: 0 34px;
  width: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  /* border: 1px solid #000; */
  text-align: center;
  h2 {
    margin: 30px 0 40px;
    font-weight: 700;
    font-size: 24px;
    color: #515a48;
    user-select: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const InputBox = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 322px;
    height: 35px;
    border: none;
    outline: none;
    border-bottom: 2px solid #dbdbdb;
    color: #000;
    letter-spacing: 0.06em;
    font-size: 1.05em;
    caret-color: #a8bc93;
  }
  span {
    position: absolute;
    left: 0;
    pointer-events: none;
    padding: 5px 0;
    margin: 10px 0;
    font-size: 1.1em;
    color: #666;
    transition: 0.5s;
  }
  input:is(:focus, :valid) ~ span {
    color: #a8bc93;
    font-size: 0.9em;
    transform: translateY(-23px);
  }
`;

const SubmitBtn = styled.input`
  background-color: #a8bc93;
  color: #fff;
  width: 322px;
  margin: 30px 0 20px;
  height: 44px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  :focus {
    background: rgba(168, 188, 147, 0.7);
  }
`;

const SignupLink = styled.a`
  color: #767676;
  text-decoration: none;
`;
const WarningMessage = styled.span`
  color: #eb5757;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
`;

export default function Login() {
  return (
    <LoginForm>
      <h2>로그인</h2>
      <Form action="">
        <InputBox>
          <input type="text" name="" required />
          <span>이메일</span>
        </InputBox>
        <InputBox>
          <input type="password" name="" required />
          <span>비밀번호</span>
        </InputBox>
        <WarningMessage>
          *이메일 또는 비밀번호가 일치하지 않습니다.
        </WarningMessage>
        <SubmitBtn type="submit" value="로그인" />
      </Form>
      <SignupLink href="#">이메일로 회원가입</SignupLink>
    </LoginForm>
  );
}
