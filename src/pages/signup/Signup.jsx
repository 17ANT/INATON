import { useRef, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import InputDiv from '../../components/Input/Input';
import { SignupContext } from '../../Contexts/SignupContext';
import postAPI from '../../common/PostAPI';

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
  const [errorColor, setErrorColor] = useState('var(--error-color)');
  const [emailMsg, setEmailMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('* 영어, 숫자포함해서 8자 이상 입력해주세요');
  const navigate = useNavigate();
  const [btnState, setBtnState] = useState('disabled');
  const [signupData, setSignupData] = useState(null);
  let { signupInfo } = useContext(SignupContext);

  useEffect(() => {
    if (emailMsg === '* 사용 가능한 이메일 입니다.' && pwMsg === '') {
      setBtnState('');
    } else {
      setBtnState('disabled');
    }
  }, [emailMsg, pwMsg]);

  useEffect(() => {
    if (emailMsg === '* 사용 가능한 이메일 입니다.') {
      setErrorColor('var(--main-color)');
    } else {
      setErrorColor('var(--error-color)');
    }
  }, [emailMsg]);

  // let newUser = useContext(SignupContext);

  const handleChange = (e) => {
    if (emailRef.current.value !== '') {
      emailRef.current.classList.add('active');
    } else {
      emailRef.current.classList.remove('active');
    }
    setSignupData({ user: { email: emailRef.current.value, password: pwRef.current.value } });
  };

  async function handleEmailValid() {
    // 이메일 validation check

    const message = await postAPI('/user/emailvalid', {
      user: {
        email: emailRef.current.value,
      },
    });
    setEmailMsg('* ' + message.message);
  }

  function handlePwValid() {
    //비밀번호 validation check
    const reg = new RegExp('^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z]).*$');

    if (reg.test(pwRef.current.value)) {
      setPwMsg('');
    } else {
      setPwMsg('* 영어, 숫자포함해서 8자 이상 입력해주세요');
    }
  }

  async function handleSubmit() {
    // error가 없을 때 context값 변경하고 링크 이동
    signupInfo.user = {
      ...signupInfo.user,
      ...signupData.user,
    };
    navigate('/signup/profile');
  }

  return (
    <SignupForm>
      <h2>이메일로 회원가입</h2>
      <Form action="">
        <InputDiv ref={emailRef} onChange={handleChange} onBlur={handleEmailValid} text="이메일" type="email" />
        <ErrorMessage text={emailMsg} color={errorColor} />
        <InputDiv
          ref={pwRef}
          onChange={() => {
            handlePwValid();
            handleChange();
          }}
          text="비밀번호"
          type="password"
        />
        <ErrorMessage text={pwMsg} />
        <CustomButton onClick={handleSubmit} size="L" state={btnState}>
          다음
        </CustomButton>
      </Form>
    </SignupForm>
  );
}
