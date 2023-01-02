import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import authCheck from '../../common/AuthenticationCheck';
import Login from '../login/Login';

const Logo = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default function Splash() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [auth, setAuth] = useState(!!token);

  const authTest = async () => {
    if (token) {
      const res = await authCheck();
      console.log('res', res.isValid);
      setAuth(res.isValid);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    authTest();
  }, [token]);

  setTimeout(() => {
    if (auth) {
      navigate('/home');
    } else {
      navigate('/login');
    }
  }, 1500);

  return (
    <Logo>
      <img src={'/assets/inaton-logo.svg'} alt="IN AT ON" />
    </Logo>
  );
}
