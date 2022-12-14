import React from 'react';
import styled from 'styled-components';
import ProfileImg from '../profileImg/ProfileImg';

const ProfileInfo = styled.div``;

export default function InlineProfileInfo({ img, name, desc, state }) {
    let size;
    switch (state.toUpperCase()) {
        case 'CHAT':
            size = '42px';
    }
    return (
        <ProfileInfo>
            {img && <ProfileImg alt={`${name}님의 프로필 이미지`} size={size}></ProfileImg>}
            <ProfileImg src={img} alt={`${name}님의 프로필 이미지`} size={size}></ProfileImg>
        </ProfileInfo>
    );
}

ProfileImg.defaultProps = {
    desc: null,
};
