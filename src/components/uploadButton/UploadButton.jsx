import React from 'react';
import styled from 'styled-components';

const UploadButtonBox = styled.label`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: block;
    border-radius: 50%;

    background: url('/assets/icon/icon-upload.png') no-repeat center/ ${(props) => props.radius};
    background-color: ${(props) => props.bg};

    cursor: pointer;
`;

export default function UploadButton({ radius, size, bg, id }) {
    return (
        <UploadButtonBox htmlFor={id} radius={radius} size={size} bg={bg}>
            <span className="sr-only">이미지 업로드</span>
            <input type="file" id="imgUpload" className={`id sr-only`} />
        </UploadButtonBox>
    );
}
