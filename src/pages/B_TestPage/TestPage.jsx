import React from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/customButton/CustomButton';
import InlineProfileInfo from '../../components/inlineProfileInfo/InlineProfileInfo';
import ProfileImg from '../../components/profileImg/ProfileImg';

const TestProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    > * {
        border: 1px solid red;
    }
`;
export default function TestPage() {
    return (
        <>
            <TestProfile>
                <InlineProfileInfo
                    img="./assets/post-img-example.png"
                    name="안녕!내 이름은 채팅"
                    desc="메시지가 보인느 공간입니다. 깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지"
                    state="chat"
                />
                <InlineProfileInfo
                    name="설명 없는 팔로우설명 없는 팔로우설명 없는 팔로우설명 없는 팔로우설명팔로우설명 없는 팔로우설명팔로우설명 없는 팔로우설명 없는 팔로우설명 없는 팔로우설명 없는 팔로우"
                    state="follow"
                />
                <InlineProfileInfo
                    name="안녕!내 이름은 팔로우"
                    desc={
                        '사용자가 설정한 프로필 설명이 보인느 공간입니다.사용자가 설정한 프로필 설명이 보인느 공간입니다.사용자가 설정한 프로필 설명이 보인느 공간입니다.사용자가 설정한 프로필 설명이 보인느 공간입니다.'
                    }
                    state="follow"
                />
                <InlineProfileInfo name="안녕!내 이름은 댓글" desc="5분전" state="comment" />
            </TestProfile>
            <ProfileImg></ProfileImg>
        </>
    );
}
