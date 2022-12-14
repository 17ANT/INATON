import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';
import ProfileImg from '../../components/profileImg/ProfileImg';

const TestProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 20px;

    > * {
        border: 1px solid #bdbdbd;
    }
`;
export default function TestPage() {
    return (
        <>
            <TestProfile>
                <InlineProfileInfo
                    img="./assets/post-img-example.png"
                    name="채팅"
                    desc="메시지가 보인느 공간입니다."
                    state="chat"
                />
                <InlineProfileInfo name="팔로우 정보" state="follow" />
                <InlineProfileInfo
                    name="팔로우"
                    desc={'사용자가 설정한 프로필 설명이 보이는 공간입니다.'}
                    state="follow"
                />
                <InlineProfileInfo name="포스트 작성자" desc="@user" state="post" />
                <InlineProfileInfo name="댓글" desc="5분전" state="comment" />
            </TestProfile>
            <ProfileImg></ProfileImg>
            <CustomButton size="ms">여기에 기존 text 값을 넣어주세요</CustomButton>
        </>
    );
}
