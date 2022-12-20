import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL } from '../../common/BASE_URL';
import CustomButton from '../../components/customButton/CustomButton';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputDiv from '../../components/Input/Input';
import postLogin from './LoginAPI';

const LoginForm = styled.div`
    /* font-family: var(--font-family); */
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
    const [user, setUser] = useState(null);
    //    {user: {
    //                     email: 'sewon123@naver.com',
    //                     password: '12345678',
    //                 },
    const emailRef = useRef(null);
    const pwRef = useRef(null);

    // console.dir(emailRef);
    // if (emailRef.current.value) {
    //     emailRef.target.classList.add('active');
    // }
    const handleChange = (e) => {
        // console.log(emailRef.current.value);
        // console.log(pwRef.current.value);

        if (emailRef.current.value !== '') {
            e.target.classList.add('active');
        } else {
            e.target.classList.remove('active');
        }

        setUser({ user: { email: emailRef.current.value, password: pwRef.current.value } });
    };

    // useEffect(() => {
    //     console.log(emailRef.current.value);
    // }, []);

    //꼼수로 로드됐을 때 0.1초안에 화면 클릭이벤트 주기

    // setTimeout(() => {
    //     btn.console.log('클릭완');
    // }, 1000);
    // emailRef.click();
    return (
        <LoginForm>
            <h2>로그인</h2>
            <Form action="">
                <InputDiv ref={emailRef} onChange={handleChange} text="이메일" type="email" />
                <InputDiv ref={pwRef} onChange={handleChange} text="비밀번호" type="password" />
                <ErrorMessage text={'*이메일 또는 비밀번호가 일치하지 않습니다.'} />
                <CustomButton
                    size="L"
                    onClick={
                        () => {
                            postLogin(user);
                        }
                        // postLogin(user)
                    }
                >
                    로그인
                </CustomButton>
            </Form>
            <SignupLink href="/signup">이메일로 회원가입</SignupLink>
        </LoginForm>
    );
}
