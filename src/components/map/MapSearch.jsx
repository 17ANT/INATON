import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import './map.css';
const { kakao } = window;

const SearchContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const MapResultList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  li {
    border-top: 1px solid #777;
  }
`;
export default function MapSearch({ searchKeyword, value, setValue }) {
  // 결과 저장
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    const mapContainer = document.getElementById('map');
    const mapOption = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567), // 중심좌표(서울시청)
      level: 3, // 확대 레벨
    };
    const map = new kakao.maps.Map(mapContainer, mapOption);

    // 줌 컨트롤러
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    let markers = [];
    const ps = new kakao.maps.services.Places();
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    searchPlaces();
    // searchPlaces() 검색 요청
    function searchPlaces() {
      const keyword = searchKeyword;

      if (!keyword.replace(/^\s+|\s+$/g, '')) {
        return false;
      }
      ps.keywordSearch(keyword, placesSearchCB);
    }
    // //searchPlaces()

    // placesSearchCB() 키워드 검색 콜백
    function placesSearchCB(data, status) {
      if (status === kakao.maps.services.Status.OK) {
        setPlaces(places);
        displayPlaces(data);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        console.log(searchKeyword);
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert('검색 결과 중 오류가 발생했습니다.');
        return;
      }
    }
    // //placesSearchCB()

    // displayPlaces() 검색 결과 목록, 마커 출력
    function displayPlaces(places) {
      const listEl = document.getElementById('places-list'),
        resultEl = document.getElementById('search-result'),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds();

      listEl && removeAllChildNods(listEl);

      removeMarker();
      for (let i = 0; i < places.length; i++) {
        let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = displayMarker(placePosition, i),
          itemEl = getListItem(i, places[i]);

        bounds.extend(placePosition);

        const btn = document.createElement('button');
        btn.innerText = '선택';
        itemEl.appendChild(btn);

        // event
        (function (marker, title) {
          kakao.maps.event.addListener(marker, 'mouseover', function () {
            displayInfowindow(marker, title);
          });

          kakao.maps.event.addListener(marker, 'mouseout', function () {
            infowindow.close();
          });

          itemEl.onmouseover = function () {
            displayInfowindow(marker, title);
            itemEl.style.outline = '3px solid purple';
          };

          itemEl.onmouseout = function () {
            infowindow.close();
            itemEl.style.outline = 'none';
            map.setBounds(bounds);
          };

          itemEl.onclick = function (e) {
            if (e.target.tagName !== 'BUTTON') {
              // 이동할 위도 경도 위치를 생성합니다
              var moveLatLon = new kakao.maps.LatLng(places[i].y, places[i].x);
              map.setLevel(3);
              map.setCenter(moveLatLon);
            }
            if (e.target.tagName === 'BUTTON') {
              const select = window.confirm(places[i].place_name);
              if (select) {
                console.log('선택했다.');
                console.log({
                  place_name: places[i].place_name,
                  x: places[i].x,
                  y: places[i].y,
                  address: places[i].address_name,
                });
                setValue({
                  place_name: places[i].place_name,
                  x: places[i].x,
                  y: places[i].y,
                  address: places[i].address_name,
                });
              }
            }
          };
        })(marker, places[i].place_name);
        fragment.appendChild(itemEl);
      }
      listEl && listEl.appendChild(fragment);
      if (resultEl) {
        resultEl.scrollTop = 0;
      }
      map.setBounds(bounds);
    }
    // //dispalyPlaces()

    // removeMarker()
    function removeMarker() {
      for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];
    }
    // //removeMarker()

    // removeAllChildNods()
    function removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    }
    // //removeAllCihldNods

    // getListItem() 검색결과 리스트 출력
    function getListItem(index, places) {
      const el = document.createElement('li');
      let itemStr = `
        <div class='info'>
            <h5 class="info-item place-name">${places.place_name}</h5>
              
              ${
                places.road_address_name
                  ? `<span class="info-item road-address-name">
                    ${places.road_address_name}
                   </span>
                   <span class="info-item address-name">
                 	 ${places.address_name}
               	   </span>`
                  : `<span class="info-item address-name">
             	     ${places.address_name}
                  </span>`
              }
        </div>
      `;

      el.innerHTML = itemStr;
      el.className = 'place-item';

      return el;
    }
    // //getLsitItem()

    // displayMarker()
    function displayMarker(position, index, title) {
      let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
        imageSize = new kakao.maps.Size(24, 35),
        imgOptions = {},
        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });

      marker.setMap(map); // 지도 위에 마커를 표출합니다
      markers.push(marker); // 배열에 생성된 마커를 추가합니다

      return marker;
    }
    // //displayMarker()

    // displayInfowindow()
    function displayInfowindow(marker, title) {
      let content = '<div style="padding:5px;z-index:1;">' + title + '</div>';

      infowindow.setContent(content);
      infowindow.open(map, marker);
    }
    // //displayInfowindow()
  }, [searchKeyword]);

  return (
    <SearchContainer>
      <div id="map" className="map"></div>
      <div id="search-result">
        {/* 검색결과, 결과 리스트, 페이지네이션 */}
        <p className="result-text sr-only">
          <strong>{searchKeyword}</strong> 검색 결과
        </p>

        <div className="scroll-wrapper">
          <MapResultList id="places-list"></MapResultList>
        </div>
      </div>
    </SearchContainer>
  );
}
