import styled from "styled-components"

const WarningMessage = styled.span`
  color: var(--error-color);
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
`;

export default function ErrorMessage({text}) {
  return (
    <WarningMessage>{text}</WarningMessage>
  )
}


// 이런식으로 사용하시면 됩니다 
{/* <ErrorMessage text={"*이메일 또는 비밀번호가 일치하지 않습니다."} /> */}