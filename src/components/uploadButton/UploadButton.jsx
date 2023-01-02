import React from 'react';
import styled from 'styled-components';

export const UploadButtonBox = styled.label`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: block;
  border-radius: 50%;

  background: url('/assets/icon/icon-upload.png') no-repeat center/ ${(props) => props.radius};
  background-color: ${(props) => props.bg};
  box-shadow: 0px 0px 4px #646464;

  cursor: pointer;
`;

export default function UploadButton({ radius, size, bg, id, onChange }) {
  return (
    <UploadButtonBox htmlFor={id} radius={radius} size={size} bg={bg} onChange={onChange}>
      <span className="sr-only">이미지 업로드</span>
      <input type="file" id="imgUpload" className={`id sr-only`} />
    </UploadButtonBox>
  );
}
