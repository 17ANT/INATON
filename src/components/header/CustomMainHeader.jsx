import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid var(--border-color);
  z-index: 4;
  background-color: #fff;
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  align-items: center;
  padding: 0 16px;
  h2 {
    color: var(--font-color);
    font-weight: bold;
    font-size: 18px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    a {
      background: url('assets/icon/icon-search.png') no-repeat center / 24px
        24px;
      display: block;
      width: 24px;
      height: 24px;
    }
  }
  .search {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    z-index: 10;
    cursor: pointer;
  }
  .searchBox {
    position: absolute;
    right: -100%;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #fff;
    align-items: center;
    /* padding: 0 30px; */
    transition: 0.5s ease-in-out;
  }
  .searchBox.active {
    right: 0;
  }
  .searchBox input {
    width: 100%;
    border: none;
    outline: none;
    padding: 0 30px;
    height: 50px;
    color: #333;
    font-size: 1.25em;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }
  .searchBtn {
    position: relative;
    left: 30px;
    top: 2.5px;
    transition: 0.5s ease-in-out;
  }
  .searchBtn.active {
    display: none;
    left: 0;
  }
  .closeBtn {
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
  }
  .closeBtn.active {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transform: scale(1);
  }
`;

export default function CustomMainHeader() {
    const [searchBox, setSearchBox] = useState("searchBox")
    const [closeBtn, setCloseBtn] = useState("closeBtn")
    const [searchBtn, setSearchBtn] = useState("searchBtn")

    const HandleSearchBtn = ()=>{
        setSearchBox("searchBox active")
        setCloseBtn("closeBtn active")
        setSearchBtn("searchBtn active")
    }

    const HandleCloseBtn = ()=>{
        setSearchBox("searchBox")
        setCloseBtn("closeBtn")
        setSearchBtn("searchBtn")
    }
    
  return (
    <Header>
      <Section>
        <h2>INATON 피드</h2>
        <div className="search">
          <span className="icon">
            <i name="search-outline" onClick={HandleSearchBtn} className={searchBtn}><img src="assets/icon/icon-search.png" alt="" /></i>
            <i name="close-outline" onClick={HandleCloseBtn} className={closeBtn}>닫기</i>
          </span>
        </div>
        <div className={searchBox}>
          <input type="text" placeholder="Search here..." />
        </div>
      </Section>
    </Header>
  );
}