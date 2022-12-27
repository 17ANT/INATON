import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import getPost from '../../common/GetPostDetail';
import Comment from '../../components/comment/Comment';
import BasicHeader from '../../components/header/BasicHeader';
import HomePost from '../../components/homePost/HomePost';
import ProfileImg from '../../components/profileImg/ProfileImg';
import getUser from '../myProfile/GetProfileAPI';
import CommentsList from '../../components/comment/CommentsListAPI';
import CommentsWrite from '../../components/comment/CommentsWriteAPI';

const PostDetailMain = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 68px 0 82px;
  gap: 20px;
`;

const CommentList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 16px;
  border-top: 1px solid var(--border-color);
  padding: 20px 0;
`;

const CommentWrite = styled.div`
  position: fixed;
  z-index: 10;
  bottom: 0px;
  padding: 0px 16px;
  margin: 0px auto;
  width: 100%;
  height: 61px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid var(--border-color);
`;

const CommentForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 18px;

  input {
    border: none;
    flex-grow: 1;

    font-size: 1.05em;
    letter-spacing: 0.05em;
    line-height: 18px;

    ::placeholder {
      color: var(--sub-border);
    }
    :focus,
    :active {
      outline: none;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: var(--sub-border);
    cursor: pointer;
    ${(props) =>
      props.active &&
      css`
        background-color: var(--error-color);
      `}
  }
`;

export default function PostDetail() {
  const params = useParams();
  const token = localStorage.getItem('token');
  const accountname = localStorage.getItem('accountname');
  const [userInfo, setUserInfo] = useState(null);
  const [postInfo, setPostInfo] = useState(null);
  const [commentsValue, setCommentsValue] = useState('');
  const commentRef = useRef(null);
  const [commentsList, setCommentsList] = useState([]);

  async function getData() {
    const userData = await getUser(token, accountname);
    setUserInfo(userData.user);
  }
  async function getComments() {
    const postData = await getPost(params.post_id);
    setPostInfo(postData.post);
    const commentData = await CommentsList(params.post_id);
    setCommentsList(commentData.comments);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getComments();
  }, [commentsList]);

  const handleCommentsValue = () => {
    // 댓글창 값 다루기
    setCommentsValue(commentRef.current.value);
  };

  async function writeComments(e) {
    // 버튼 클릭 or 댓글 입력 후 엔터 이벤트시 댓글 작성
    e.preventDefault();
    const reqData = {
      comment: {
        content: commentsValue,
      },
    };
    await CommentsWrite(params.post_id, reqData);
    setCommentsValue('');
    commentRef.current.value = '';
  }

  return (
    <>
      <BasicHeader />
      {postInfo && (
        <PostDetailMain>
          <HomePost data={postInfo} page="detail" />
          <CommentList>
            {commentsList &&
              commentsList.map((el) => <Comment key={el.id} data={el} />)}
          </CommentList>
          <CommentWrite>
            {userInfo && (
              <ProfileImg
                size="36px"
                alt="프로필 이미지"
                src={userInfo.image}
              />
            )}
            <CommentForm onSubmit={writeComments}>
              <label htmlFor="inputComment" className="ir"></label>
              <input
                ref={commentRef}
                onChange={handleCommentsValue}
                type="text"
                placeholder="댓글 입력하기..."
                id="inputComment"
                required
              />
              {commentRef.current && <button type="submit">게시</button>}
            </CommentForm>
          </CommentWrite>
        </PostDetailMain>
      )}
    </>
  );
}
