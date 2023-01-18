import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import postAPI from '../../common/PostAPI';
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
const SignupLink = styled(Link)`
  color: var(--sub-font);
  text-decoration: none;
`;

export default function LoginEmail({ setAuth }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    if (emailRef.current.value !== '') {
      e.target.classList.add('active');
    } else if (emailRef.current.value === '') {
      e.target.classList.remove('active');
    }
    setUser({ user: { email: emailRef.current.value, password: pwRef.current.value } });
  };

  async function handleSubmit() {
    // 데이터를 넘겨주면서 페이지 이동
    // const result = await postLogin(user);
    const result = await postAPI('/user/login', user);
    console.log('postAPI로 로그인');

    if (result.user) {
      localStorage.setItem('token', result.user.token);
      localStorage.setItem('accountname', result.user.accountname);

      setAuth(true);
      navigate('/');
    } else {
      setMsg('* 이메일 또는 비밀번호가 일치하지 않습니다.');
    }
  }

  return (
    <LoginForm>
      <h2>로그인</h2>
      <Form action="">
        <InputDiv ref={emailRef} onChange={handleChange} text="이메일" type="email" />
        <InputDiv ref={pwRef} onChange={handleChange} text="비밀번호" type="password" />
        <ErrorMessage text={msg} />
        <CustomButton
          size="L"
          onClick={() => {
            handleSubmit();
          }}
        >
          로그인
        </CustomButton>
      </Form>
      <SignupLink to="/signup">이메일로 회원가입</SignupLink>
    </LoginForm>
  );
}
