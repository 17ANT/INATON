import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import CommentsDelete from './CommentsDeleteAPI';
import CommentReport from './CommentReportAPI';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const CommentContainer = styled.li`
  position: relative;
  width: 358px;
`;

const CommentContent = styled.p`
  width: 358px;
  word-break: break-word;
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

export default function Comment({ data, setFlag }) {
  const params = useParams();

  const myAcc = localStorage.getItem('accountname');

  const handleMore = () => {
    if (data.author.accountname === myAcc) {
      confirmAlert({
        message: '댓글을 삭제하시겠습니까?',
        buttons: [
          {
            label: '삭제',
            onClick: async () => {
              await CommentsDelete(params.post_id, data.id);
              setFlag((prev) => !prev);
            },
          },
          {
            label: '취소',
          },
        ],
      });
    } else {
      confirmAlert({
        message: '댓글을 신고하시겠습니까',
        buttons: [
          {
            label: '신고',
            onClick: () => {
              CommentReport(params.post_id, data.id);
            },
          },
          {
            label: '취소',
          },
        ],
      });
    }
  };

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
      <MoreBtn type="button" onClick={handleMore}>
        <span className="sr-only">더보기</span>
      </MoreBtn>
    </CommentContainer>
  );
}
