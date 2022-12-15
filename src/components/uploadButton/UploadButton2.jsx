import React from 'react';
import styled from 'styled-components';

const UploadButtonBox = styled.label`
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: block;
    border-radius: 50%;
    background: url('/assets/upload-file.png') no-repeat center/ ${(props) => props.radius};
    background-size: cover;
    cursor: pointer;
`;

export default function UploadButton({ radius, size, id, onChange }) {
    return (
        <UploadButtonBox htmlFor={id} radius={radius} size={size} onChange={onChange}>
            <span className='sr-only'>이미지 업로드</span>
            <input type='file' id='imgUpload' className={`id sr-only`} />
        </UploadButtonBox>
    );
}
