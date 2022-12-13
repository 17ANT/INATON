import { useRef } from 'react';
import styled from 'styled-components';
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

export default function Input({ type }) {
  const validValue = useRef(null);
  const handleValid = (e) => {
    if (validValue.current.value !== '') {
      e.target.classList.add('active');
    } else {
      e.target.classList.remove('active');
    }
  };
  return (
    <InputTag onChange={handleValid} type={type} required ref={validValue} />
  );
}

