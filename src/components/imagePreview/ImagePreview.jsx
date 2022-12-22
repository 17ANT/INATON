import React from 'react';
import styled, { css } from 'styled-components';

const ImageItem = styled.li`
    position: relative;
    width: 304px;
    height: 228px;

    ${(props) =>
        props.size > 1 &&
        css`
            width: 166px;
            height: 124px;
        `}

    img {
        /* 이미지 개수에 따른 크기는 JS로 컨트롤 */
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    button {
        position: absolute;
        top: 6px;
        right: 6px;
        width: 22px;
        height: 22px;
        border: none;
        background: url('/assets/icon/icon-delete.png') no-repeat center/22px 22px transparent;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        cursor: pointer;
    }
`;

export default function ImagePreview({ size, src, onClick }) {
    return (
        <ImageItem size={size}>
            <img src={src} alt="" />
            <button type="button" onClick={onClick}></button>
        </ImageItem>
    );
}
