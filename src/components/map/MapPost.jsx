import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './map.css';

const { kakao } = window;

const ResultContainer = styled.div`
  width: 304px;
  height: 208px;
  border-radius: 10px;
`;

export default function MapPost({ place }) {
  const [lat, lng] = [place.y, place.x];

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(lat, lng),
      level: 3, // 확대 레벨
    };

    // 지도 생성
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(lat, lng);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 길찾기
    var iwContent = `<div style="padding:5px;">${place.place_name} <a href="https://map.kakao.com/link/to/${place.place_name},${lat},${lng}" style="color:blue" target="_blank">길찾기</a></div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, [place]);

  return (
    <ResultContainer>
      <div id="map" className="map"></div>
    </ResultContainer>
  );
}
