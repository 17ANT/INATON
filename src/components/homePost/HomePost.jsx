import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import ImgSlider from '../imgSlider/ImgSlider';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import MapInline from '../map/MapInline';
import MapPost from '../map/MapPost';
import postAPI from '../../common/PostAPI';
import deleteAPI from '../../common/DeleteAPI';

const PostContainer = styled.div`
  position: relative;
  width: 358px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  // 수정되어야 할 gap
  ${(props) =>
    props.page === 'detail' &&
    css`
      gap: 16px;
    `}
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
  background: url('https://github.com/17ANT/INATON/blob/main/public/assets/icon/icon-more-vertical.png?raw=true')
    no-repeat center/18px 18px;
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

export function hasMap(content) {
  try {
    const res = JSON.parse(content);
    return !!res.map;
  } catch (e) {
    return false;
  }
}
export default function HomePost({ data, page }) {
  const [mapInfo, setMapInfo] = useState({});
  const [textContent, setTextContent] = useState('');

  useEffect(() => {
    const contents = data.content;

    if (hasMap(contents)) {
      // 지도 정보가 있을 때
      const objContents = JSON.parse(contents);
      setMapInfo(objContents.map);
      setTextContent(objContents.content);
    } else {
      // 지도 정보가 없을 때
      setTextContent(contents);
    }
  }, []);

  const [likeState, setLikeState] = useState(data.hearted);
  const likeCnt = changeUnit(data.heartCount);
  const [likeCont, setLikeCont] = useState(likeCnt);
  const commentCnt = changeUnit(data.commentCount);
  const imgList = data.image ? data.image.split(',') : '';
  const createDate = dateChange(data.createdAt);
  const accountname = localStorage.getItem('accountname');

  const navigate = useNavigate();

  const handlePostModal = (e) => {
    let isDelete = false;
    data.author.accountname === accountname
      ? confirmAlert({
          message: '게시글을 편집하시겠습니까?',
          buttons: [
            {
              label: '삭제',
              onClick: () => {
                isDelete = true;
              },
            },
            {
              label: '수정',
              onClick: () => {
                navigate(`/post/${data.id}/modify`, {
                  state: data,
                });
              },
            },
          ],
          afterClose: () => {
            if (isDelete) {
              confirmAlert({
                message: '삭제하시겠습니까?',
                buttons: [
                  {
                    label: '삭제',
                    onClick: async () => {
                      const res = await deleteAPI(`/post/${data.id}`);

                      if (res.status === '200') {
                        window.location.replace(`/INATON/profile`);
                      }
                    },
                  },
                  {
                    label: '취소',
                  },
                ],
              });
            }
          },
        })
      : confirmAlert({
          message: '게시글을 신고하시겠습니까?',
          buttons: [
            {
              label: '신고',
              onClick: async () => {
                await postAPI(`/post/${data.id}/report`);
              },
            },
            {
              label: '취소',
            },
          ],
        });
  };

  const handleLike = async () => {
    if (!likeState) {
      await postAPI(`/post/${data.id}/heart`);
      setLikeState((prev) => !prev);
      setLikeCont((prev) => prev + 1);
    }
    if (likeState) {
      await deleteAPI(`/post/${data.id}/unheart`);
      setLikeState((prev) => !prev);
      setLikeCont((prev) => prev - 1);
    }
  };

  return (
    <>
      <PostContainer page={page}>
        <InlineProfileInfo
          accountname={data.author.accountname}
          name={data.author.username}
          desc={`@ ${data.author.accountname}`}
          img={data.author.image}
          state="post"
        />
        <PostContents>
          <p>{textContent}</p>
          {imgList && (
            <>
              <ImgSlider images={imgList} />
            </>
          )}
          {!!Object.keys(mapInfo).length &&
            (page === 'detail' ? (
              <MapPost place={mapInfo} />
            ) : (
              <Link to={`/post/${data.id}`}>
                <MapInline place={mapInfo}></MapInline>
              </Link>
            ))}
        </PostContents>
        <PostReaction>
          <button>
            {likeState ? (
              <img
                src={process.env.PUBLIC_URL + '/assets/icon/icon-heart-active.png'}
                alt="좋아요 취소"
                onClick={handleLike}
              />
            ) : (
              <img src={process.env.PUBLIC_URL + '/assets/icon/icon-heart.png'} alt="좋아요" onClick={handleLike} />
            )}
            {likeCont}
          </button>
          <Link to={`/post/${data.id}`}>
            <button>
              <img src={process.env.PUBLIC_URL + '/assets/icon/icon-message-circle.png'} alt="게시글 상세로 이동하기" />
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
