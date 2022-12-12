import React from 'react';
import styled from 'styled-components';

const YourProfileDiv = styled.div`
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

const MoreVerticalImg = styled.img`
    margin: 12px 12px 12px 0;
    width: 24px;
    height: 24px;
`;

const ProfileSection = styled.section`
    margin: 0 auto;
    padding: 30px 16px 26px;
    width: fit-content;
`;

const FollowDiv = styled.div`
    display: flex;
    width: 275px;
    justify-content: center;
    align-items: center;
`;

const FollowersDiv = styled.div`
    text-align: center;
`;

const FollowersNum = styled.p`
    margin: 6px;
    font-size: 18px;
    font-weight: 700;
`;

const FollowersStr = styled.p`
    font-size: 8px;
    font-weight: 400;
    color: var(--sub-font);
`;

const ProfileImg = styled.img`
    margin: 0 41px;
    width: 110px;
    height: 110px;
`;

const FollowingsDiv = styled.div`
    text-align: center;
`;

const FollowingsNum = styled.p`
    margin: 6px;
    font-size: 18px;
    font-weight: 700;
    color: var(--sub-font);
`;

const FollowingsStr = styled.p`
    font-size: 8px;
    font-weight: 400;
    color: var(--sub-font);
`;

const UserNameHeader = styled.h1`
    margin-top: 16px;
    text-align: center;
    font-size: 17px;
    font-weight: 700;
`;

const UserIdSpan = styled.span`
    margin-top: 6px;
    display: block;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: var(--sub-font);
`;

const UserDescSpan = styled.span`
    margin-top: 16px;
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    color: var(--sub-font);
`;

const ButtonDiv = styled.div`
    display: flex;
    margin: 24px auto 0 auto;
    width: fit-content;
`;

const FollowBtn = styled.div`
    margin: 0 10px;
    padding: 8px 40px;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    background-color: var(--main-color);
`;

const ChatBtn = styled.img`
    display: inline;
    padding: 7px;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
`;

const ShareBtn = styled.img`
    padding: 7px;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
`;

export default function MyProfile() {
    return (
        <YourProfileDiv>
            <TopBasicNav>
                <ArrowLeftImg src='/assets/icon/icon-arrow-left.png' alt='arrow-left-img' />
                <MoreVerticalImg src='/assets/icon/icon-more-vertical.png' alt='more-vertical-img' />
            </TopBasicNav>

            <ProfileSection>
                <FollowDiv>
                    <FollowersDiv>
                        <FollowersNum>2950</FollowersNum>
                        <FollowersStr>followers</FollowersStr>
                    </FollowersDiv>
                    <ProfileImg src='/assets/Ellipse-1.png'></ProfileImg>
                    <FollowingsDiv>
                        <FollowingsNum>128</FollowingsNum>
                        <FollowingsStr>followings</FollowingsStr>
                    </FollowingsDiv>
                </FollowDiv>

                <UserNameHeader>애월읍 위니브 감귤농장</UserNameHeader>
                <UserIdSpan>@weniv_Mandarin</UserIdSpan>
                <UserDescSpan>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</UserDescSpan>

                <ButtonDiv>
                    <ChatBtn src='/assets/icon/icon-message-circle.png'></ChatBtn>
                    <FollowBtn>팔로우</FollowBtn>
                    <ShareBtn src='/assets/icon/icon-share.png'></ShareBtn>
                </ButtonDiv>
            </ProfileSection>
        </YourProfileDiv>
    );
}
