import React from 'react';
import styled from 'styled-components';
import UploadHeader from '../../components/header/UploadHeader';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoInput from '../../components/userInfoInput/UserInfoInput';
import { ImgButton } from '../../components/imageButton/ImageButton';

const ProfileModificationWrap = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    width: 100%;
    min-width: 358px;
`;

const ProfileHeader = styled.div`
    position: relative;
    margin: 0 auto;
    padding-top: 30px;
    width: 275px;
    text-align: center;
`;

const ProfileMain = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 0;
    width: 322px;
    gap: 16px;
`;

const UploadImageButton = styled(ImgButton)`
    position: absolute;
    top: 105px;
    left: 155px;
    padding: 0;
    border: none;
`;

export default function ProfileModification() {
    return (
        <>
            <UploadHeader></UploadHeader>

            <ProfileModificationWrap>
                <ProfileHeader>
                    <ProfileImg size='110px' src='../assets/Ellipse-1.png' alt='message'></ProfileImg>
                    <UploadImageButton
                        size='36px'
                        src='../assets/upload-file.png'
                        alt='upload button'
                    ></UploadImageButton>
                </ProfileHeader>

                <ProfileMain>
                    <UserInfoInput labelText='사용자 이름' placeholder='2~10자 이내여야 합니다.'></UserInfoInput>
                    <UserInfoInput
                        labelText='계정 ID'
                        placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                    ></UserInfoInput>
                    <UserInfoInput
                        labelText='소개'
                        placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
                    ></UserInfoInput>
                </ProfileMain>
            </ProfileModificationWrap>
        </>
    );
}
