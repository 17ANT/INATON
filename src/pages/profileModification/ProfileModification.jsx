import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import styled from 'styled-components';
import UploadHeader from '../../components/header/UploadHeader';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoInput from '../../components/userInfoInput/UserInfoInput';
import ImageButton from '../../components/imageButton/ImageButton';
import UploadButton2 from '../../components/uploadButton/UploadButton2';
import 'react-confirm-alert/src/react-confirm-alert.css';

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

const DeleteButtonWrap = styled.div`
    position: absolute;
    top: 30px;
    left: 160px;
`;

const UploadButtonWrap = styled.div`
    position: absolute;
    top: 100px;
    left: 160px;
`;

export default function ProfileModification() {
    const [imageFile, setImageFile] = useState('../assets/Ellipse-1.png');
    const [show, setShow] = useState(false);

    /* 이미지를 업로드 하는 이벤트 함수 */
    const viewImageFile = (e) => {
        setImageFile(URL.createObjectURL(e.target.files[0]));
        setShow(true);
    };

    /* 업로드 한 이미지를 기본 이미지로 변경하는 이벤트 함수 */
    const deleteImageFile = () => {
        if (imageFile !== '../assets/Ellipse-1.png') {
            confirmAlert({
                message: '기본 이미지로 변경하시겠습니까?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            URL.revokeObjectURL(imageFile);
                            setImageFile('../assets/Ellipse-1.png');
                            setShow(false);
                        },
                    },
                    {
                        label: 'No',
                    },
                ],
            });
        }
    };

    return (
        <>
            <UploadHeader></UploadHeader>

            <ProfileModificationWrap>
                <ProfileHeader>
                    <ProfileImg size='110px' src={imageFile} alt='message'></ProfileImg>
                    <DeleteButtonWrap>
                        {show && (
                            <ImageButton
                                size='20px'
                                src='../assets/x-button.png'
                                alt='delete image'
                                onClick={deleteImageFile}
                            ></ImageButton>
                        )}
                    </DeleteButtonWrap>
                    <UploadButtonWrap>
                        <UploadButton2 id='imgUpload' radius='50%' size='36px' onChange={viewImageFile}></UploadButton2>
                    </UploadButtonWrap>
                </ProfileHeader>

                <ProfileMain>
                    <UserInfoInput
                        labelText='사용자 이름'
                        placeholder='2~10자 이내여야 합니다.'
                        maxLength='10'
                    ></UserInfoInput>
                    <UserInfoInput
                        labelText='계정 ID'
                        placeholder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
                    ></UserInfoInput>
                    <UserInfoInput
                        labelText='소개'
                        placeholder='자신과 판매할 상품에 대해 소개해 주세요!'
                        maxLength='50'
                    ></UserInfoInput>
                </ProfileMain>
            </ProfileModificationWrap>
        </>
    );
}
