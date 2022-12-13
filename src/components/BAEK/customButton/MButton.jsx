import React from 'react';
import styled from 'styled-components';

const MButtonBox = styled.button`
    width: 120px;
    height: 34px;
    border-radius: 30px;
    background-color: var(--main-color);
    border: none;
    color: #fff;
    cursor: pointer;
`;

export default function MButton({ text, onClick }) {
    return <MButtonBox onClick={onClick}>{text}</MButtonBox>;
}
