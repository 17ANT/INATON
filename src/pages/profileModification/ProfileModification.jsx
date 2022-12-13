import React from 'react';
import styled from 'styled-components';

const ProfileModificationDiv = styled.div`
    margin: 0 auto;
    width: 100%;
`;

const TopBasicNav = styled.nav`
    display: flex;
    justify-content: space-between;
    min-width: 390px;
`;

const ArrowLeftImg = styled.img`
    margin: 13px 0 13px 16px;
    width: 22px;
    height: 22px;
`;

const SaveBtn = styled.div`
    margin: 8px 16px 8px 0;
    padding: 7px 31px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 32px;
    background-color: var(--main-color);
`;

const ProfileForm = styled.form`
    margin: 0 auto;
    padding: 30px 34px 0;
`;

const ImgDiv = styled.div`
    position: relative;
    margin: 0 auto;
    width: fit-content;
    text-align: center;
`;

const ProfileImg = styled.img`
    margin: 0 41px;
    width: 110px;
    height: 110px;
`;

const ChangeImg = styled.img`
    position: absolute;
    top: 74px;
    left: 115px;
    width: 36px;
    height: 36px;
`;

const UserNameLabel = styled.p`
    margin: 30px 0 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--sub-font);
`;

const UserNameInput = styled.input`
    padding: 0 0 8px 0;
    width: 322px;
    font-size: 14px;
    font-weight: 400;
    color: var(--border-color);
    border: none;
    border-bottom: 1px solid var(--border-color);
`;

const UserIdLabel = styled.p`
    margin: 16px 0 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--sub-font);
`;

const UserIdInput = styled.input`
    padding: 0 0 8px 0;
    width: 322px;
    font-size: 14px;
    font-weight: 400;
    color: var(--border-color);
    border: none;
    border-bottom: 1px solid var(--border-color);
`;

const UserDescLabel = styled.p`
    margin: 16px 0 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--sub-font);
`;

const UserDescInput = styled.input`
    padding: 0 0 8px 0;
    width: 322px;
    font-size: 14px;
    font-weight: 400;
    color: var(--border-color);
    border: none;
    border-bottom: 1px solid var(--border-color);
`;

export default function ProfileModification() {
    return (
        <ProfileModificationDiv>
            <TopBasicNav>
                <ArrowLeftImg src='/assets/icon/icon-arrow-left.png' alt='arrow-left-img' />
                <SaveBtn>저장</SaveBtn>
            </TopBasicNav>

            <ProfileForm>
                <ImgDiv>
                    <ProfileImg src='/assets/Ellipse-1.png'></ProfileImg>
                    <ChangeImg src='/assets/upload-file.png'></ChangeImg>
                </ImgDiv>

                <UserNameLabel htmlFor='name'>사용자 이름</UserNameLabel>
                <UserNameInput type='text' id='name' placeholder='2~10자 이내여야 합니다.'></UserNameInput>
                <UserIdLabel htmlFor='id'>계정 ID</UserIdLabel>
                <UserIdInput
                    type='text'
                    id='id'
                    placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                ></UserIdInput>
                <UserDescLabel htmlFor='desc'>소개</UserDescLabel>
                <UserDescInput type='text' id='desc' placeholder='자신에 대해 소개해 주세요!'></UserDescInput>
            </ProfileForm>
        </ProfileModificationDiv>
    );
}
