import React from 'react';
import styled, { css } from 'styled-components';
import ProfileImg from '../profileImg/ProfileImg';

const ProfileInfo = styled.div`
    width: fit-content;
    display: flex;
    gap: ${(props) => props.gap};
    align-items: center;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: ${(props) => (props.check === 'COMMENT' ? 'rows' : 'column')};
    align-items: ${(props) => (props.check === 'COMMENT' ? 'center' : 'rows')};
    gap: ${(props) => props.line};

    white-space: nowrap;
    strong {
        max-width: 240px;
        font-weight: 500;
        white-space: nowrap;

        font-size: 14px;
        line-height: 18px;

        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        width: ${(props) => (props.check === 'COMMENT' ? 'fit-content' : '240px')};
        height: 15px;

        font-weight: 400;
        font-size: 12px;
        line-height: 15px;

        overflow: hidden;
        text-overflow: ellipsis;

        &::before {
            content: ${(props) => (props.check === 'COMMENT' ? '안녕' : '룰라')};
        }
    }
`;

export default function InlineProfileInfo({ img, name, desc, state }) {
    const check = state.toUpperCase();
    let size, gap, line;
    switch (check) {
        case 'CHAT':
        case 'POST':
            size = '42px';
            gap = '12px';
            line = '4px';
            break;
        case 'COMMENT':
            size = '36px';
            gap = '12px';
            line = '6px';

            break;
        case 'FOLLOW':
            size = '50px';
            gap = '12px';
            line = '6px';

            break;
        default:
            size = '42px';
            gap = '12px';
            line = '6px';
    }

    return (
        <ProfileInfo gap={gap}>
            <ProfileImg src={img} alt="" size={size}></ProfileImg>
            <ProfileText line={line} check={check}>
                <strong>{name}</strong>
                <p>{desc}</p>
            </ProfileText>
        </ProfileInfo>
    );
}

InlineProfileInfo.defaultProps = {
    img: './assets/basic-profile-img.png',
    desc: '  ',
};
