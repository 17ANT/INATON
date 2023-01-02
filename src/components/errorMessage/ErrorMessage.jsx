import styled, { css } from 'styled-components';

const WarningMessage = styled.span`
  color: var(--error-color);
  ${(props) =>
    props.colorname &&
    css`
      color: ${props.colorname};
    `};
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
`;

export default function ErrorMessage({ text, color }) {
  return <WarningMessage colorname={color}>{text}</WarningMessage>;
}
