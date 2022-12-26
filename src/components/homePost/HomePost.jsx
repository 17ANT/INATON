import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ImgSlider from '../imgSlider/ImgSlider';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const PostContainer = styled.div`
  position: relative;
  width: 358px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PostContents = styled.div`
  position: relative;
  padding-left: 54px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    padding-right: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

const PostReaction = styled.div`
  display: flex;
  padding-left: 54px;
  align-items: center;
  gap: 16px;

  img {
    width: 20px;
    height: 20px;
  }
  button {
    padding: 0px;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    gap: 6px;

    font-size: 12px;
    line-height: 12px;
    color: var(--sub-font);
    cursor: pointer;
  }
`;

const ImgContainer = styled.ul`
  display: flex;
  width: 304px;
  height: 228px;
  /* overflow-x: scroll; */
  /* overflow-y: hidden; */
  outline: 3px solid yellow;
`;

const ImgItem = styled.li`
  width: 100%;
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const SwipeContainer = styled.ul`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 54px;
  display: flex;
  gap: 6px;
`;

const SwipeItem = styled.li`
  background-color: #fff;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  ${(props) =>
    props.on &&
    css`
      background-color: var(--error-color);
    `}
`;

const PostDate = styled.p`
  padding-left: 54px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--sub-font);
`;

const MoreBtn = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 18px;
  height: 18px;
  background: url('/assets/icon/icon-more-vertical.png') no-repeat center/18px
    18px;
  border: none;
  cursor: pointer;
`;

function changeUnit(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  else if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  else return num;
}

function dateChange(createdAt) {
  const day = new Date(createdAt);
  const year = day.getFullYear();
  const month = day.getMonth() + 1;
  const date = day.getDate();
  return `${year}년 ${month}월 ${date}일`;
}

export default function HomePost({ data }) {
  const likeCnt = changeUnit(data.heartCount);
  const commentCnt = changeUnit(data.commentCount);
  const imgList = data.image ? data.image.split(',') : '';
  let swipeIndex = 0;
  const createDate = dateChange(data.createdAt);

  const handleSwipe = (e) => {
    // 이미지 스와이프 이벤트
    e.preventDefault();
    swipeIndex += 1;
    if (swipeIndex > 2) {
      swipeIndex = 0;
    }
    const position = -100 * swipeIndex;
    const changeList = e.currentTarget.parentElement.childNodes;
    changeList.forEach((el) => {
      el.style.transform = `translateX(${position}%)`;
    });
  };

  const handlePostModal = (e) => {
    //
    confirmAlert({
      // message: '기본 이미지로 변경하시겠습니까?',
      buttons: [
        {
          label: '수정',
          onClick: () => {
            console.log('수정');
          },
        },
        {
          label: '삭제',
          onClick: () => {
            console.log('삭제');
          },
        },
      ],
    });
  };
  return (
    <>
      <PostContainer>
        <InlineProfileInfo
          accountname={data.author.accountname}
          name={data.author.username}
          desc={`@ ${data.author.accountname}`}
          state="post"
        />
        <PostContents>
          <p>{data.content}</p>
          {imgList && (
            <>
              <ImgSlider images={imgList} />
            </>
          )}
        </PostContents>
        <PostReaction>
          <button>
            <img src={'/assets/icon/icon-heart.png'} alt="좋아요" />
            {likeCnt}
          </button>
          <Link to={`/post/${data.id}`}>
            <button>
              <img
                src={'/assets/icon/icon-message-circle.png'}
                alt="댓글 입력창으로 이동"
              />{' '}
              {commentCnt}
            </button>
          </Link>
        </PostReaction>
        <PostDate>{createDate}</PostDate>
        <MoreBtn onClick={handlePostModal} type="button">
          <span className="sr-only">더보기</span>
        </MoreBtn>
      </PostContainer>
    </>
  );
}
