import { useRef, useContext, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputDiv from '../../components/Input/Input';
import { SignupContext } from '../../Contexts/SignupContext';
import emailValid from './EmailValidAPI';

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
    const emailRef = useRef(null);
    const pwRef = useRef(null);
    const [msg, setMsg] = useState('');
    let newUser = useContext(SignupContext);
    let signupData = {};
    //     "user": {
    //         "username": String*,
    //         "email": String*,
    //         "password": String*,
    //         "accountname": String*,
    //         "intro": String,
    //         "image": String // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
    // }

    const handleTest = () => {
        // console.log(newUser);
        // newUser(signupData);
        // const
        signupData = {
            email: emailRef.current.value,
            password: pwRef.current.value,
        };
    };

    async function handleSubmit() {
        // 이메일  체크
        // console.log(emailRef.current.value);
        const message = await emailValid({
            user: {
                email: emailRef.current.value,
            },
        });
        console.log('메세지 : ' + message.message);
        setMsg('* ' + message.message);
        console.log(msg);
        // 비밀번호 validation

        // error가 없을 때 context값 변경하고 링크 이동
        newUser = { ...newUser, ...signupData };
        console.log(newUser);
    }

    return (
        <SignupForm>
            <h2>이메일로 회원가입</h2>
            <Form action="">
                <InputDiv ref={emailRef} onChange={handleTest} text="이메일" type="email" />
                <ErrorMessage text={msg} />
                <InputDiv ref={pwRef} onChange={handleTest} text="비밀번호" type="password" />
                <ErrorMessage text={'*비밀번호는 6자 이상이어야 합니다.'} />
                <CustomButton onClick={handleSubmit} size="L">
                    다음
                </CustomButton>
            </Form>
        </SignupForm>
    );
}
