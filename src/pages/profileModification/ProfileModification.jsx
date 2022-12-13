import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProfileModificationDiv = styled.div`
    margin: 0 auto;
    width: 100%;
`;

const TopBasicNav = styled.nav`
    display: flex;
    justify-content: space-between;
    min-width: 390px;
    border-bottom: 0.5px solid var(--border-color);
`;

const ArrowLeftImg = styled.img`
    margin: 13px 0 10px 16px;
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
    padding-left: 10px;
    width: 275px;
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
    left: 165px;
    width: 36px;
    height: 36px;
`;

const InputDiv = styled.div`
    margin: 0 auto;
    padding-top: 14px;
    width: fit-content;
`;

const UserInputLabel = styled.p`
    margin: 16px 0 10px;
    font-size: 12px;
    font-weight: 500;
    color: var(--sub-font);
`;

const UserInput = styled.input`
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
        color: var(--border-color);
    }
`;

const UserInputError = styled.strong`
    display: block;
    margin-top: 6px;
    font-size: 12px;
    color: var(--error-color);
`;

export default function ProfileModification() {
    return (
        <ProfileModificationDiv>
            <TopBasicNav>
                <Link to='/myprofile' style={{ textDecoration: 'none' }}>
                    <ArrowLeftImg src='/assets/icon/icon-arrow-left.png' alt='arrow-left-img' />
                </Link>
                <SaveBtn>저장</SaveBtn>
            </TopBasicNav>

            <ProfileForm>
                <ImgDiv>
                    <ProfileImg src='/assets/Ellipse-1.png'></ProfileImg>
                    <ChangeImg src='/assets/upload-file.png'></ChangeImg>
                </ImgDiv>

                <InputDiv>
                    <UserInputLabel htmlFor='name'>사용자 이름</UserInputLabel>
                    <UserInput type='text' id='name' placeholder='2~10자 이내여야 합니다.'></UserInput>
                    <UserInputError>*2~10자 이내여야 합니다.</UserInputError>
                    <UserInputLabel htmlFor='id'>계정 ID</UserInputLabel>
                    <UserInput
                        type='text'
                        id='id'
                        placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                    ></UserInput>
                    <UserInputError>*영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.</UserInputError>
                    <UserInputLabel htmlFor='desc'>소개</UserInputLabel>
                    <UserInput type='text' id='desc' placeholder='자신에 대해 소개해 주세요!'></UserInput>
                    <UserInputError>*최대 50자 입력 가능합니다.</UserInputError>
                </InputDiv>
            </ProfileForm>
        </ProfileModificationDiv>
    );
}
