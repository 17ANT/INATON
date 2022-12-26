import React from 'react';
import styled from 'styled-components';
import userPost from '../../common/GetUserPost';
import ImgSlider from '../../components/imgSlider/ImgSlider';

const Container = styled.div`
  padding: 100px;
`;
export default function TestPage() {
  const photoList = [
    'https://mandarin.api.weniv.co.kr/1671956183268.png',
    'https://mandarin.api.weniv.co.kr/1671956180440.png',
    'https://mandarin.api.weniv.co.kr/1671956183268.png',
  ];
  return (
    <Container>
      <ImgSlider images={photoList} />
    </Container>
  );
}
