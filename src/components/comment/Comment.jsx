import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import { BASE_URL } from '../../common/BASE_URL';

const CommentContainer = styled.li`
  position: relative;
  width: 358px;
`;

const CommentContent = styled.p`
  margin-left: 48px;
  margin-right: 18px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #333333;
`;

const MoreBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 0px;
  width: 20px;
  height: 20px;
  background: url('/assets/icon/icon-more-vertical.png') no-repeat center/20px;
  border: none;
  cursor: pointer;
`;

const ProfileLink = styled(Link)`
  width: fit-content;
`;

const timeCheck = (val) => {
  const now = new Date();
  const time = new Date(val);
  const diff = Math.floor((now.getTime() - time.getTime()) / 1000); //초 차이

  const sec = 1;
  const min = sec * 60;
  const hour = min * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = week * 4;

  let result = '';
  if (diff < sec) {
    result = '방금전';
  } else if (diff < min) {
    result = diff + '초 전';
  } else if (diff < hour) {
    result = Math.floor(diff / min) + '분 전';
  } else if (diff < day) {
    result = Math.floor(diff / hour) + '시간 전';
  } else if (diff < week) {
    result = Math.floor(diff / day) + '일 전';
  } else if (diff < month) {
    result = Math.floor(diff / week) + '주 전';
  } else if (diff < month * 3) {
    result = Math.floor(diff / month) + '달 전';
  } else {
    result = `${time.getFullYear()}년 ${
      time.getMonth() + 1
    }월 ${time.getDate()}일`;
  }

  return result;
};

export default function Comment({ data }) {
  //   if (data.length === 0) {
  //     return <></>;
  //   }else{

  //   }

  const timeResult = timeCheck(data.createdAt);
  return (
    <CommentContainer>
      <InlineProfileInfo
        accountname={data.author.accountname}
        name={data.author.username}
        img={data.author.image}
        desc={`${timeResult}`}
        state="comment"
      />

      <CommentContent>{data.content}</CommentContent>
      <MoreBtn type="button">
        <span className="sr-only">더보기</span>
      </MoreBtn>
    </CommentContainer>
  );
}
