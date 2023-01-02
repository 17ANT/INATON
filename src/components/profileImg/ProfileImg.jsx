import React from 'react';
import styled from 'styled-components';

const ProfileImgBox = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
`;

export default function ProfileImg({ size, src, alt }) {
  return <ProfileImgBox size={size} src={src} alt={alt}></ProfileImgBox>;
}

ProfileImg.defaultProps = {
  src: 'https://mandarin.api.weniv.co.kr/Ellipse.png',
};
