import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';

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
    overflow-x: scroll;
    overflow-y: hidden;
`;

const ImgItem = styled.li`
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
    background: url('/assets/icon/icon-more-vertical.png') no-repeat center/18px 18px;
    border: none;
    cursor: pointer;
`;

function changeUnit(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    else if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    else return num;
}

export default function HomePost({ data }) {
    const likeCnt = changeUnit(data.heartCount);
    const commentCnt = changeUnit(data.commentCount);
    const imgList = data.image ? data.image.split(',') : '';
    let swipeIndex = 0;

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

    return (
        <>
            <PostContainer>
                <InlineProfileInfo name={data.author.username} desc={`@ ${data.author.accountname}`} state="post" />
                <PostContents>
                    <p>{data.content}</p>
                    {imgList && (
                        <>
                            <ImgContainer>
                                {imgList.map((el, idx) => (
                                    <ImgItem key={idx} onClick={handleSwipe}>
                                        <img src={el} alt="" />
                                    </ImgItem>
                                ))}
                            </ImgContainer>
                            {imgList.length > 1 && (
                                <SwipeContainer>
                                    {imgList.map((el, idx) => (
                                        <SwipeItem key={idx} on={idx ? null : 'on'}></SwipeItem>
                                    ))}
                                </SwipeContainer>
                            )}
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
                            <img src={'/assets/icon/icon-message-circle.png'} alt="댓글 입력창으로 이동" /> {commentCnt}
                        </button>
                    </Link>
                </PostReaction>

                <PostDate>{data.createdAt}</PostDate>
                <MoreBtn type="button">
                    <span className="sr-only">더보기</span>
                </MoreBtn>
            </PostContainer>
        </>
    );
}
