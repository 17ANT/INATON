import { forwardRef, useRef } from 'react';
import styled from 'styled-components';
const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-top: 26px;
  span {
    position: absolute;
    left: 0;
    pointer-events: none;
    padding: 5px 0;
    margin: 10px 0;
    font-size: 1.1em;
    color: var(--sub-font);
    transition: 0.5s;
  }
  .active {
    border-bottom: 2px solid var(--main-color);
  }
  .active ~ span {
    color: var(--main-color);
    font-size: 0.9em;
    transform: translateY(-23px);
  }
`;
const InputTag = styled.input`
  width: 322px;
  height: 35px;
  border: none;
  outline: none;
  border-bottom: 2px solid #dbdbdb;
  color: var(--font-color);
  letter-spacing: 0.06em;
  font-size: 1.05em;
  caret-color: var(--main-color);

  :is(:focus, :valid) ~ span {
    color: var(--main-color);
    font-size: 0.9em;
    transform: translateY(-23px);
  }
  :is(:focus, :valid) {
    border-bottom: 2px solid var(--main-color);
  }
`;

function InputDiv({ type, text, onChange, onBlur }, ref) {
  return (
    <InputBox>
      <InputTag
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        required
      />
      <span>{text}</span>
    </InputBox>
  );
}

export default forwardRef(InputDiv);
