import React from 'react';
import styled from 'styled-components';

const MapItemContainer = styled.div`
  position: relative;

  width: max(304px, 80%);
  border: 1px solid var(--main-color);
  border-radius: 10px;
  padding: 12px 12px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  strong {
    font-weight: 500;
    font-size: 18px;
    color: var(--font-color);
  }

  p {
    font-size: 12px;
    color: var(--sub-font);
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`;

export default function MapInline({ place }) {
  return (
    <MapItemContainer>
      <img src="/assets/icon/icon-marker.png" alt="지도 정보" />
      <div>
        <strong>{place.place_name}</strong>
        <p>{place.address}</p>
      </div>
    </MapItemContainer>
  );
}
