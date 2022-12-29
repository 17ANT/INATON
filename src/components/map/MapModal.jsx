import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './page.css';
import styled from 'styled-components';
import MapSearch from './MapSearch';

const MapContainer = styled.div`
  width: 358px;
  border: 1px solid #000;
  margin: 10px auto;
  form {
    width: 358px;
  }
`;

export default function MapModal() {
  const [place, setPlace] = useState({});
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  const keywordChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitKeyword = (e) => {
    e.preventDefault();
    setKeyword(value);
  };

  const valueCheck = () => {
    if (value.replace(/^\s+|\s+$/g, '') === '') {
      alert('검색어를 입력해주세요');
    }
  };
  useEffect(() => {
    console.log('place>> ', place);
  }, [place]);

  return (
    <MapContainer>
      <form className="search_form" onSubmit={submitKeyword}>
        <label htmlFor="place">
          <input
            type="text"
            id="place"
            name="place"
            onChange={keywordChange}
            placeholder="검색어를 입력해주세요. "
            required
          />
        </label>
        <button className="btn_submit" onClick={valueCheck}>
          검색
        </button>
      </form>

      <MapSearch searchKeyword={keyword} value={place} setValue={setPlace} />
    </MapContainer>
  );
}
