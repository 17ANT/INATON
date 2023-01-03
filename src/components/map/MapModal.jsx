import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './page.css';
import styled, { css } from 'styled-components';
import MapSearch from './MapSearch';
import ImageButton from '../imageButton/ImageButton';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
`;

const MapContainer = styled.div`
  position: absolute;
  width: 358px;
  height: fit-content;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
  margin: 10px auto;

  form {
    padding: 12px;
    width: 100%;
    background-color: var(--sub-color);
    border: none;
  }

  #map {
    min-height: 300px;
  }
`;

const CloseDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  background-color: var(--sub-color);
  border-bottom: 1px solid #777;

  h3 {
    font-size: 18px;
    letter-spacing: 0.05em;
    color: var(--font-color);
  }
  button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      background-color: rgba(255, 255, 255, 0.5);
    }
    img {
      width: 14px;
      height: 14px;
    }
  }
`;

export default function MapModal({ open, setOpen, select, setSelect }) {
  const [place, setPlace] = useState({});
  const [value, setValue] = useState('');
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setKeyword('');
  }, [open]);

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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <ModalBackground onClick={handleClose}>
          <MapContainer onClick={(e) => e.stopPropagation()}>
            <CloseDiv>
              <h3>장소검색</h3>
              <button onClick={handleClose}>
                <img src={process.env.PUBLIC_URL + `/assets/icon/icon-delete-black.png`} alt="닫기" />
              </button>
            </CloseDiv>

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
            <MapSearch
              searchKeyword={keyword}
              select={select}
              setSelect={setSelect}
              handleClose={handleClose}
              setOpen={setOpen}
            />
          </MapContainer>
        </ModalBackground>
      )}
    </>
  );
}
