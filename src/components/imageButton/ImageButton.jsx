import React from 'react';
import styled from 'styled-components';

export const ImgButton = styled.img`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    cursor: pointer;
`;

export default function ImageButton({ size, src, alt, onClick }) {
    return <ImgButton size={size} src={src} alt={alt} onClick={onClick}></ImgButton>;
}
