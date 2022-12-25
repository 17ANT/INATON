import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import getPost from '../../common/GetPostDetail';
import Comment from '../../components/comment/Comment';
import BasicHeader from '../../components/header/BasicHeader';
import HomePost from '../../components/homePost/HomePost';
import ProfileImg from '../../components/profileImg/ProfileImg';
import CommentsList from './CommentsListAPI';
import CommentsWrite from './CommentsWriteAPI';

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
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-top: 1px solid var(--border-color);
  padding: 20px 0;
`;

const CommentWrite = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  bottom: 0;
  padding: 0px 16px;
  height: 61px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: #fff;
  border-top: 1px solid var(--border-color);
`;

const CommentForm = styled.form`
  margin: 0px;
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
  }
`;

export default function PostDetail() {
  const params = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [commentInfo, setCommentInfo] = useState(null);

  async function getData(post_id) {
    const postData = await getPost(params.post_id);
    setPostInfo(postData.post);
  }
  getData();

  const [commentsValue, setCommentsValue] = useState('');
  const inputRef = useRef(null);
  const [commentsList, setCommentsList] = useState([]);
  // 게시글 가져오기
  // const postInfo = ;

  const handleCommentsValue = () => {
    // 댓글창 값 다루기
    setCommentsValue(inputRef.current.value);
  };

  const writeComments = (e) => {
    // 버튼 클릭 or 댓글 입력 후 엔터 이벤트시 댓글 작성
    e.preventDefault();
    CommentsWrite(commentsValue);
    setCommentsValue('');
    inputRef.current.value = '';
    console.log(commentsValue);
  };

  async function test() {
    // 댓글 리스트 불러오기
    const comments = await CommentsList();
    console.log(comments);
    // setCommentsList(comments);
  }
  test();

  return (
    <>
      <BasicHeader />
      <PostDetailMain>
        {postInfo && <HomePost data={postInfo} />}
        <CommentList>
          <Comment name="서귀포시 무슨 농장" time="5" src="./assets/post-img-example.png">
            게시글 답글 ~~ !! 최고최고
          </Comment>
          <Comment name="감귤러버" time="15" src="./assets/chat-exapmle.png">
            안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘안녕하세요. 사진이
            너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘
          </Comment>
          {/* {commentsList &&
            commentsList.map((item) => (
              <Comment key={item._id} time={item.createdA} src={item.author.image}>
                {item.content}
              </Comment>
            ))} */}
        </CommentList>

        <CommentWrite>
          <ProfileImg size="36px" alt="프로필 이미지" />

          <CommentForm>
            <label htmlFor="inputComment" className="ir"></label>
            <input
              ref={inputRef}
              onChange={handleCommentsValue}
              type="text"
              placeholder="댓글 입력하기..."
              id="inputComment"
              required
            />
            <button type="submit" onClick={writeComments}>
              게시
            </button>
          </CommentForm>
        </CommentWrite>
      </PostDetailMain>
    </>
  );
}
