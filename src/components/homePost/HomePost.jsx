import React from 'react';
import styled from 'styled-components';
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
    width: 300%;
    height: 228px;
    overflow: scroll;
`;

const ImgItem = styled.li`
    transition: 0.2s;
    width: 304px;
    height: 228px;

    img {
        width: 100%;
        height: 100%;
        border: 1px solid red;
        object-fit: cover;
    }
`;

const SwipeContainer = styled.ul`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-left: 54px;
    display: flex;
    gap: 10px;
`;

const SwipeItem = styled.li`
    background-color: var(--error-color);
    width: 10px;
    height: 10px;
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

export default function HomePost({ like, comment, imgList }) {
    const likeCnt = changeUnit(like);
    const commentCnt = changeUnit(comment);
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
                <h3 className="sr-only">게시글 상세 정보</h3>

                <InlineProfileInfo name="애월읍 위니브 감귤농장" desc="@ weniv_Mandarin" state="post" />
                <PostContents>
                    <p>
                        옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한
                        그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.
                    </p>
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
                                <SwipeItem key={idx}></SwipeItem>
                            ))}
                        </SwipeContainer>
                    )}
                </PostContents>

                <PostReaction>
                    <button>
                        <img src={'/assets/icon/icon-heart.png'} alt="좋아요" />
                        {likeCnt}
                    </button>
                    <button>
                        <img src={'/assets/icon/icon-message-circle.png'} alt="댓글 입력창으로 이동" /> {commentCnt}
                    </button>
                </PostReaction>

                <PostDate>2020년 10월 21일</PostDate>
                <MoreBtn type="button">
                    <span className="sr-only">더보기</span>
                </MoreBtn>
            </PostContainer>
        </>
    );
}
