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
  background: rgba(0, 0, 0, 0.8);
`;

const MapContainer = styled.div`
  position: absolute;
  width: 358px;
  height: fit-content;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  margin: 10px auto;
  /* z-index: 100; */
  form {
    /* width: 358px; */
    width: 100%;
    background-color: var(--sub-color);
    border: none;
  }
  #map {
    min-height: 300px;
  }
  display: none;
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
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
      <MapContainer open={open}>
        <ImageButton
          size="24px"
          src="./assets/x-button.png"
          alt="닫기 버튼"
          onClick={handleClose}
          float="right"
        ></ImageButton>
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
    </>
  );
}
