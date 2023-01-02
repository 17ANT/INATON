import React from 'react';
import styled from 'styled-components';

export const ImgButton = styled.img`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  cursor: pointer;
  float: ${(props) => props.float};
`;

export default function ImageButton({ size, src, alt, onClick, float }) {
  return <ImgButton size={size} src={src} alt={alt} onClick={onClick} float={float}></ImgButton>;
}
