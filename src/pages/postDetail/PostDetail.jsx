import React from 'react';
import styled from 'styled-components';
import HomePost from '../../components/homePost/HomePost';

const Header = styled.div`
    width: 100%;
    height: 48px;
    background-color: var(--main-color);
`;

const PostDetailMain = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px;
    gap: 20px;
`;

const CommentList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-top: 1px solid var(--border-color);
    padding: 20px 0;
`;

const CommentItem = styled.li`
    position: relative;
    width: 358px;

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`;

const CommentTime = styled.p`
    font-size: 10px;
    line-height: 13px;
    color: var(--sub-font);

    ::before {
        content: '· ';
    }
`;

const UserName = styled.strong`
    margin-left: 6px;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
`;

const CommentContent = styled.p`
    margin-left: 48px;
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
    background: url('/assets/icon/icon-more-vertical.png') no-repeat center/20px 20px;
    border: none;
    cursor: pointer;
`;

const CommentWrite = styled.div`
    position: fixed;
    width: auto;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0px 16px;
    height: 61px;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    border-top: 1px solid var(--border-color);

    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
`;

const CommentForm = styled.form`
    margin: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 18px;

    input {
        height: 100%;
        background: none;
        border: none;
        flex-grow: 1;

        ::placeholder {
            font-size: 14px;
            line-height: 18px;
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
            <Header />
            <PostDetailMain>
                <HomePost />

                <CommentList>
                    <CommentItem>
                        <ProfileContainer>
                            <img src={'/assets/basic-profile-img.png'} alt="프로필 이미지" />
                            <UserName>서귀포시 무슨 농장</UserName>
                            <CommentTime>5분전</CommentTime>
                        </ProfileContainer>
                        <CommentContent>게시글 답글 ~~ !! 최고최고</CommentContent>
                        <MoreBtn type="button">
                            <span className="sr-only">더보기</span>
                        </MoreBtn>
                    </CommentItem>
                    <CommentItem>
                        <ProfileContainer>
                            <img src={'/assets/basic-profile-img.png'} alt="프로필 이미지" />
                            <UserName>감귤러버</UserName>
                            <CommentTime>15분전</CommentTime>
                        </ProfileContainer>
                        <CommentContent>
                            안녕하세요. 사진이 너무 멋있어요. 한라봉 언제 먹을 수 있나요? 기다리기 지쳤어요 땡뻘땡뻘...
                        </CommentContent>
                        <MoreBtn type="button">
                            <span className="sr-only">더보기</span>
                        </MoreBtn>
                    </CommentItem>
                </CommentList>

                <CommentWrite>
                    <img src={'/assets/basic-profile-img.png'} alt="프로필 이미지" />
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
