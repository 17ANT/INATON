import React from 'react';
import styled from 'styled-components';

const CustomButtonBox = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  background-color: ${(props) => {
    if (props.state === 'disabled') {
      return 'var(--sub-color)';
    } else if (props.state === 'activ') {
      return '#fff';
    } else {
      return 'var(--main-color)';
    }
  }};
  color: ${(props) => (props.state === 'activ' ? 'var(--sub-font)' : '#fff')};
  border: ${(props) => (props.state === 'activ' ? '1px solid var(--border-color)' : 'none')};
  cursor: ${(props) => (props.state === 'disabled' ? 'default' : 'pointer')};

  :active {
    background-color: ${(props) => {
      if (props.state === null) {
        return 'var(--sub-color)';
      }
    }};
  }
`;

export default function CustomButton({ children, onClick, size, state }) {
  let width, height, radius;
  switch (size.toUpperCase()) {
    case 'L':
      width = '322px';
      height = '44px';
      radius = '44px';
      break;
    case 'M':
      width = '120px';
      height = '34px';
      radius = '30px';
      break;
    case 'MS':
      width = '90px';
      height = '32px';
      radius = '32px';
      break;
    case 'S':
      width = '56px';
      height = '28px';
      radius = '28px';
      break;
    default:
      width = 'fit-content';
      height = 'fit-content';
      radius = '30%';
  }

  return (
    <>
      <CustomButtonBox
        type="button"
        onClick={onClick}
        state={state}
        width={width}
        height={height}
        radius={radius}
        disabled={state === 'disabled' ? true : false}
      >
        {children}
      </CustomButtonBox>
    </>
  );
}

CustomButton.defaultProps = {
  state: null,
};
