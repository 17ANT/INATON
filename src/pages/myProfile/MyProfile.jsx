import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BasicHeader from '../../components/header/BasicHeader';
import FollowCount from '../../components/followCount/FollowCount';
import ProfileImg from '../../components/profileImg/ProfileImg';
import UserInfoText from '../../components/userInfoText/UserInfoText';
import CustomButton from '../../components/customButton/CustomButton';

const MyProfileWrap = styled.div`
    margin: 0 auto;
    padding-top: 50px;
    width: 100%;
    min-width: 358px;
    border-bottom: 6px solid var(--border-color);
`;

const ProfileHeader = styled.div`
    display: flex;
    margin: 0 auto;
    padding-top: 30px;
    justify-content: space-between;
    align-items: center;
    gap: 41px;
    width: 275px;
`;

const ProfileMain = styled.div`
    margin: 0 auto;
    padding-top: 16px;
    width: 358px;
`;

const ProfileButton = styled.div`
    margin: 0 auto;
    padding: 24px 0;
    width: 144px;
    text-align: center;
`;

export default function MyProfile() {
    return (
        <>
            <BasicHeader></BasicHeader>

            <MyProfileWrap>
                <ProfileHeader>
                    <FollowCount count={2950} kind='followers'></FollowCount>
                    <ProfileImg size='110px' src='assets/Ellipse-1.png' alt='profile image'></ProfileImg>
                    <FollowCount count={128} kind='followings'></FollowCount>
                </ProfileHeader>

                <ProfileMain>
                    <UserInfoText
                        userName='애월읍 위니브 감귤농장'
                        userId='@ weniv_Mandarin'
                        userDesc='애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장'
                    ></UserInfoText>
                </ProfileMain>

                <ProfileButton>
                    <Link to='/myprofile/modification'>
                        <CustomButton size='M' state='activ'>
                            프로필 수정
                        </CustomButton>
                    </Link>
                </ProfileButton>
            </MyProfileWrap>
        </>
    );
}
