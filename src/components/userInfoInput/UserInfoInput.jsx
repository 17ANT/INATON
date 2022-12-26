import React, { forwardRef } from 'react';
import styled from 'styled-components';

const UserInputDiv = styled.div`
    width: 322px;
    margin-top: 16px;

    &:first-child {
        margin-top: 0px;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: var(--sub-font);
`;

const Input = styled.input`
    margin-top: 10px;
    padding-bottom: 8px;
    width: 322px;
    font-size: 14px;
    font-weight: 400;
    border: none;
    border-bottom: 2px solid var(--border-color);

    &:focus,
    &:active {
        outline: none;
        border: none;
        border-bottom: 2px solid var(--main-color);
    }
    &::placeholder {
        font-size: 14px;
        color: var(—border-color);
    }
`;

function UserInfoInput({ labelText, placeholder, maxLength, onBlur, onChange, defaultValue }, ref) {
    return (
        <UserInputDiv>
            <Label>{labelText}</Label>
            <Input
                ref={ref}
                placeholder={placeholder}
                maxLength={maxLength}
                onBlur={onBlur}
                onChange={onChange}
                defaultValue={defaultValue}
            ></Input>
        </UserInputDiv>
    );
}

export default forwardRef(UserInfoInput);
