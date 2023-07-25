import React from 'react';
import styled, { css } from 'styled-components';
import ProfileImg from '../profileImg/ProfileImg';
import { Link } from 'react-router-dom';

const ProfileInfo = styled.div`
  width: fit-content;
  display: flex;
  gap: ${(props) => props.gap};
  align-items: center;
  a {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.line};

  ${(props) =>
    props.check === 'COMMENT' &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  white-space: nowrap;
  strong {
    max-width: 240px;
    font-weight: 700;
    white-space: nowrap;

    font-size: 14px;
    line-height: 18px;

    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    width: 240px;
    height: 15px;

    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--sub-font);

    overflow: hidden;
    text-overflow: ellipsis;

    ${(props) =>
      props.check === 'COMMENT' &&
      css`
        width: fit-content;
        font-size: 10px;
        line-height: 13px;
        &:before {
          content: '· ';
        }
      `}
  }
`;

export default function InlineProfileInfo({
  accountname,
  img,
  name,
  desc,
  state,
}) {
  const check = state.toUpperCase();
  let size, gap, line;
  switch (check) {
    case 'CHAT':
    case 'POST':
      size = '42px';
      gap = '12px';
      line = '2px';
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
  const myaccount = localStorage.getItem('accountname');
  let route = `/profile/${accountname}`;
  if (accountname === myaccount) {
    route = `/profile`;
  }

  return (
    <ProfileInfo gap={gap}>
      {check === 'CHAT' ? (
        <>
          <ProfileImg src={img} alt="" size={size}></ProfileImg>
          <ProfileText line={line} check={check}>
            <strong>{name}</strong>
            <p>{desc}</p>
          </ProfileText>
        </>
      ) : (
        <Link to={route}>
          <ProfileImg src={img} alt="" size={size}></ProfileImg>
          <ProfileText line={line} check={check}>
            <strong>{name}</strong>
            <p>{desc}</p>
          </ProfileText>
        </Link>
      )}
    </ProfileInfo>
  );
}

InlineProfileInfo.defaultProps = {
  img: 'https://api.mandarin.weniv.co.kr/Ellipse.png',
  desc: '  ',
};
