import { useRef } from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputDiv from '../../components/Input/Input';

const SignupForm = styled.div`
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  button {
    margin-top: 30px;
  }
`;

export default function Signup() {
  return (
    <SignupForm>
      <h2>이메일로 회원가입</h2>
      <Form action="">
        <InputDiv text="이메일" type="email" />
        <ErrorMessage text={'*이미 가입된 이메일 주소입니다.'} />
        <InputDiv text="비밀번호" type="password" />
        <ErrorMessage text={'*이메일 또는 비밀번호가 일치하지 않습니다.'} />
        <CustomButton text="다음" size="L" state="disabled" />
      </Form>
    </SignupForm>
  );
}
