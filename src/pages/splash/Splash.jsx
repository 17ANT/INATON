import React from 'react';
import styled from 'styled-components';

const Logo = styled.main`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;
export default function Splash() {
    return (
        <Logo>
            <img src={'/assets/inaton-logo.svg'} alt="IN AT ON" />
        </Logo>
    );
}
