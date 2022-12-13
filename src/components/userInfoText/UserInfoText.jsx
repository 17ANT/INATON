import React from 'react';
import styled from 'styled-components';

const UserInfoDiv = styled.div`
    width: 358px;
    text-align: center;
`;

const UserName = styled.strong`
    font-size: 17px;
    font-weight: 700;
`;

const UserId = styled.p`
    margin-top: 6px;
    font-size: 12px;
    font-weight: 400;
    color: var(--sub-font);
`;

const UserDesc = styled.p`
    margin-top: 16px;
    font-size: 14px;
    font-weight: 400;
    color: var(--sub-font);
`;

export default function UserInfoText({ userName, userId, userDesc }) {
    return (
        <UserInfoDiv>
            <UserName>{userName}</UserName>
            <UserId>{userId}</UserId>
            <UserDesc>{userDesc}</UserDesc>
        </UserInfoDiv>
    );
}
