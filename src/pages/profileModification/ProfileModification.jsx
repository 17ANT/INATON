import React, { useContext, useEffect, useRef, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styled from 'styled-components';
import UploadHeader from '../../components/header/UploadHeader';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoInput from '../../components/userInfoInput/UserInfoInput';
import ImageButton from '../../components/imageButton/ImageButton';
// import postSignup from './SignupAPI';
import { SignupContext } from '../../Contexts/SignupContext';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import accountValid from './AccountValidAPI';
import { useNavigate } from 'react-router-dom';
import UploadButton from '../../components/uploadButton/UploadButton';
import imageUpload from './ImageAPI';
import { BASE_URL } from '../../common/BASE_URL';
import getMyProfile from '../../common/GetMyInfo';
import putProfile from './ProfileModificationAPI';

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
  const [imageFile, setImageFile] = useState(
    'https://mandarin.api.weniv.co.kr/Ellipse.png'
  );
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState('*사용 가능한 계정ID 입니다.');
  let { signupInfo } = useContext(SignupContext);
  const nameRef = useRef(null);
  const accountRef = useRef(null);
  const introRef = useRef(null);
  const navigate = useNavigate();
  let signupData = {};
  const [require, setRequire] = useState(true);
  const [btnState, setBtnState] = useState('disabled');
  const [myProfile, setMyProfile] = useState({});

  useEffect(() => {
    async function handleProfile() {
      const myProfileData = await getMyProfile();
      const userInfo = myProfileData.user;

      setMyProfile(userInfo);
      setImageFile(userInfo.image);
      if (userInfo.image !== BASE_URL + '/' + 'Ellipse.png') setShow(true);
    }
    handleProfile();
  }, []);

  /* 이미지를 업로드 하는 이벤트 함수 */
  const viewImageFile = async (e) => {
    const imgSrc = await imageUpload(e.target.files[0]);
    console.log(imgSrc);
    if (imgSrc.message) {
      alert(imgSrc.message);
    } else {
      setImageFile(BASE_URL + '/' + imgSrc.filename);
      setShow(true);
    }
    // setImageFile(URL.createObjectURL(e.target.files[0]));
  };

  /* 업로드 한 이미지를 기본 이미지로 변경하는 이벤트 함수 */
  const deleteImageFile = () => {
    if (imageFile !== BASE_URL + '/' + 'Ellipse.png') {
      confirmAlert({
        message: '기본 이미지로 변경하시겠습니까?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
              // URL.revokeObjectURL(imageFile);
              setImageFile(BASE_URL + '/' + 'Ellipse.png');
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

  useEffect(() => {
    if (msg === '*사용 가능한 계정ID 입니다.' && require) {
      setBtnState('');
    } else {
      setBtnState('disabled');
    }
  }, [msg, require]);

  async function handleValid() {
    const reg = new RegExp('^[a-zA-Z0-9._]{1,}$');

    // 정규식 체크
    if (reg.test(accountRef.current.value)) {
      // valid 체크
      const message = await accountValid({
        user: {
          accountname: accountRef.current.value,
        },
      });

      // 오류메시지 출력하기
      setMsg('*' + message.message);

      if (message.message === '사용 가능한 계정ID 입니다.') {
        signupData = { ...signupData, accountname: accountRef.current.value };
      }
    } else {
      setMsg('영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.');
    }
  }
  async function handleSubmit() {
    // API를 불러오면 끝
    const reqData = {
      user: {
        username: nameRef.current.value,
        accountname: accountRef.current.value,
        intro: introRef.current.value,
        image: imageFile,
      },
    };
    const res = await putProfile(reqData);

    // error가 없을 때 context값 변경하고 링크 이동
    signupData = {
      username: nameRef.current.value,
      accountname: accountRef.current.value,
      intro: introRef.current.value,
      image: imageFile,
    };
    signupInfo.user = {
      ...signupInfo.user,
      ...signupData,
    };

    navigate('/myprofile');
  }

  const handleName = () => {
    if (nameRef.current.value.length >= 2) {
      setRequire(true);
    } else {
      setRequire(false);
    }
  };

  return (
    <>
      <UploadHeader
        state={btnState}
        onClick={() => {
          handleSubmit();
        }}
        text="저장"
      />

      <ProfileModificationWrap>
        <ProfileHeader>
          <ProfileImg size="110px" src={imageFile} alt="message"></ProfileImg>
          <DeleteButtonWrap>
            {show && (
              <ImageButton
                size="20px"
                src="../assets/x-button.png"
                alt="delete image"
                onClick={deleteImageFile}></ImageButton>
            )}
          </DeleteButtonWrap>
          <UploadButtonWrap>
            <UploadButton
              bg="#f26e22"
              id="imgUpload"
              radius="22px"
              size="36px"
              onChange={viewImageFile}></UploadButton>
          </UploadButtonWrap>
        </ProfileHeader>

        <ProfileMain>
          <UserInfoInput
            labelText="사용자 이름"
            placeholder="2~10자 이내여야 합니다."
            maxLength="10"
            ref={nameRef}
            onChange={handleName}
            defaultValue={myProfile.username}></UserInfoInput>

          <UserInfoInput
            labelText="계정 ID"
            placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
            onChange={handleValid}
            ref={accountRef}
            defaultValue={myProfile.accountname}></UserInfoInput>
          <ErrorMessage text={msg} />

          <UserInfoInput
            labelText="소개"
            placeholder="50자 이내로 자신을 소개해 주세요."
            maxLength="50"
            ref={introRef}
            defaultValue={myProfile.intro}></UserInfoInput>
        </ProfileMain>
      </ProfileModificationWrap>
    </>
  );
}
