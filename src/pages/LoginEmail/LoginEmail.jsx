import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputDiv from '../../components/Input/Input';

const LoginForm = styled.div`
  padding: 0 34px;
  width: fit-content;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  h2 {
    margin: 30px 0 40px;
    font-weight: 700;
    font-size: 24px;
    color: var(--font-color);
    user-select: none;
  }
  button {
    margin: 30px 0 20px;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
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
        <InputDiv text="이메일" type="email" />
        <InputDiv text="비밀번호" type="password" />
        <ErrorMessage text={'*이메일 또는 비밀번호가 일치하지 않습니다.'} />
        <CustomButton text="로그인" size="L" state="disabled" />
      </Form>
      <SignupLink href="/signup">이메일로 회원가입</SignupLink>
    </LoginForm>
  );
}
