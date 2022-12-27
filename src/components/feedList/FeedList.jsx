import styled from 'styled-components';
import React from 'react';
import HomePost from '../homePost/HomePost';

const FeedUl = styled.ul`
  min-height: calc(100vh - 158px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
`;

export default function FeedList({ posts }) {
  return (
    <FeedUl>
      {posts &&
        posts.map((item) => (
          <li key={item.id}>
            <HomePost data={item} />
          </li>
        ))}
    </FeedUl>
  );
}
