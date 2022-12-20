import React from 'react';
import styled from 'styled-components';
import Comment from '../../components/comment/Comment';
import BasicHeader from '../../components/header/BasicHeader';
import HomePost from '../../components/homePost/HomePost';
import ProfileImg from '../../components/profileImg/ProfileImg';

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
    return (
        <>
            <BasicHeader />
            <PostDetailMain>
                <HomePost
                    like="123456789"
                    comment="1234"
                    imgList={[
                        '/assets/chat-exapmle.png',
                        '/assets/post-img-example.png',
                        '/assets/post-img-example.png',
                    ]}
                />

                <CommentList>
                    <Comment name="서귀포시 무슨 농장" time="5" src="./assets/post-img-example.png">
                        게시글 답글 ~~ !! 최고최고
                    </Comment>
                    <Comment name="감귤러버" time="15" src="./assets/chat-exapmle.png">
                        안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요
                        땡뻘땡뻘안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘
                    </Comment>
                </CommentList>

                <CommentWrite>
                    <ProfileImg size="36px" alt="프로필 이미지" />

                    <CommentForm>
                        <label htmlFor="inputComment" className="ir"></label>
                        <input type="text" placeholder="댓글 입력하기..." id="inputComment" />
                        <button>게시</button>
                    </CommentForm>
                </CommentWrite>
            </PostDetailMain>
        </>
    );
}
