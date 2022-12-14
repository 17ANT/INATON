import React from 'react';
import styled from 'styled-components';

export const ImgButton = styled.img`
    padding: 9px;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    border: 1px solid var(--border-color);
    cursor: pointer;
`;

export default function ImageButton({ size, src, alt }) {
    return <ImgButton size={size} src={src} alt={alt}></ImgButton>;
}
