import React from 'react';
import styled from 'styled-components';

const MsButtonBox = styled.button`
    width: 90px;
    height: 32px;
    border-radius: 32px;
    background-color: var(--main-color);
    border: none;
    color: #fff;
    cursor: pointer;
`;

export default function MsButton({ text, onClick }) {
    return <MsButtonBox onClick={onClick}>{text}</MsButtonBox>;
}
