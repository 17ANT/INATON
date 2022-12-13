import React from 'react';
import styled from 'styled-components';

const SButtonBox = styled.button`
    width: 56px;
    height: 28px;
    border-radius: 28px;
    background-color: var(--main-color);
    border: none;
    color: #fff;
    cursor: pointer;
`;

export default function SButton({ text, onClick }) {
    return <SButtonBox onClick={onClick}>{text}</SButtonBox>;
}
