import React from 'react';
import styled from 'styled-components';

const FollowDiv = styled.div`
  width: fit-content;
  text-align: center;
  cursor: pointer;
`;

const CountNum = styled.strong`
  font-size: 18px;
  font-weight: 700;
`;

const FollowKind = styled.p`
  margin-top: 6px;
  font-size: 8px;
  font-weight: 400;
  color: var(--sub-font);
`;

export default function FollowCount({ count, kind, onClick }) {
  let cnt = '';
  if (count >= 1000000) cnt = Math.floor(count / 1000000) + 'M';
  else if (count >= 1000) cnt = Math.floor(count / 1000) + 'K';
  else cnt = `${count}`;

  return (
    <FollowDiv onClick={onClick}>
      <CountNum>{cnt}</CountNum>
      <FollowKind>{kind}</FollowKind>
    </FollowDiv>
  );
}
