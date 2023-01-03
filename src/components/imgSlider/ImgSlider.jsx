import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const Slider = styled.div`
  position: relative;
  width: 304px;
  height: 228px;
  overflow: hidden;
`;

const ImgContainer = styled.ul`
  display: flex;
  width: 304px;
  height: 228px;
  transition: 0.3s;
  ${(props) =>
    props.position &&
    css`
      transform: translate(${props.position * -100}%);
    `}
`;

const ImgItem = styled.li`
  img {
    width: 304px;
    height: 228px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 12px;

  display: flex;
  justify-content: center;
  flex: 0 0 6px;
  gap: 6px;
  z-index: 5;
`;

const Dots = styled.button`
  background-color: #fff;
  height: 6px;
  padding: 0px;
  flex: 0 0 6px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--error-color);
    `}
`;

const Prev = styled.button`
  width: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  left: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  img {
    width: 24px;
  }
  &:disabled {
    visibility: hidden;
  }
`;

const Next = styled.button`
  width: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  img {
    width: 24px;
  }
  &:disabled {
    visibility: hidden;
  }
`;

export default function ImgSlider({ images }) {
  const [showIndex, setShowIndex] = useState(0);
  const dotsRef = useRef(null);

  useEffect(() => {
    if (dotsRef.current && dotsRef.current.hasChildNodes()) {
      const dotsRefList = dotsRef.current.childNodes;
      dotsRefList.forEach((el) => {
        el.active = false;
      });
      dotsRefList[showIndex]['active'] = true;
    }
  }, [showIndex]);

  const handleDots = (e) => {
    const dotsList = Array.from(dotsRef.current.childNodes);
    setShowIndex(dotsList.indexOf(e.target));
  };

  const movePrev = () => {
    setShowIndex((prev) => prev - 1);
  };
  const moveNext = () => {
    setShowIndex((prev) => prev + 1);
  };

  return (
    <>
      {images && (
        <Slider>
          <ImgContainer position={showIndex}>
            {images.map((el, idx) => (
              <ImgItem key={idx}>
                <img src={el} alt="게시글 이미지" />
              </ImgItem>
            ))}
          </ImgContainer>
          {images.length > 1 && (
            <>
              <DotsContainer ref={dotsRef}>
                {images.map((el, idx) => (
                  <Dots key={idx} active={showIndex === idx} onClick={handleDots}></Dots>
                  // 화살표 버튼
                ))}
              </DotsContainer>
              <Prev onClick={movePrev} disabled={showIndex === 0}>
                <img src={process.env.PUBLIC_URL + '/assets/icon/icon-prev.png'} alt="이전" />
              </Prev>
              <Next onClick={moveNext} disabled={showIndex === images.length - 1}>
                <img src={process.env.PUBLIC_URL + '/assets/icon/icon-next.png'} alt="이후" />
              </Next>
            </>
          )}
        </Slider>
      )}
    </>
  );
}
