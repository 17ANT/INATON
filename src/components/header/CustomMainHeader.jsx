import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import InlineProfileInfo from '../inlineProfileInfo/InlineProfileInfo';
import getAPI from '../../common/GetAPI';

const Header = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  border-bottom: 1px solid var(--border-color);
  z-index: 20;
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
      background: url('https://17ant.github.io/INATON/assets/icon/icon-search.png') no-repeat center / 24px 24px;
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
    max-height: 100%;
    display: flex;
    background-color: #fff;
    align-items: center;
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
    left: 22px;
    transition: 0.5s ease-in-out;
    img {
      width: 20px;
    }
  }
  .searchBtn.active {
    display: none;
    left: 0;
  }
  .closeBtn {
    opacity: 0;
    visibility: hidden;
    transform: scale(0);
    img {
      width: 20px;
    }
  }
  .closeBtn.active {
    opacity: 1;
    visibility: visible;
    transition: 0.5s;
    transform: scale(1);
  }
`;

const SearchResultList = styled.ul`
  padding: 16px 0;
  height: calc(100vh - 110px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 16px;
  li {
    width: 385px;
    margin: 0 auto;
    cursor: pointer;
  }
`;

export default function CustomMainHeader({ searchActive, setSearchActive }) {
  const [searchBox, setSearchBox] = useState('searchBox');
  const [closeBtn, setCloseBtn] = useState('closeBtn');
  const [searchBtn, setSearchBtn] = useState('searchBtn');
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  async function HandleSearchValue() {
    setSearchValue(searchRef.current.value);
    if (searchRef.current.value) {
      const searchList = await getAPI(`/user/searchuser/?keyword=${searchRef.current.value}`);
      setSearchResult(searchList);
    }
  }

  useEffect(() => {
    if (searchActive) {
      HandleSearchBtn();
    }
  }, [searchActive]);

  const HandleSearchBtn = () => {
    setSearchBox('searchBox active');
    setCloseBtn('closeBtn active');
    setSearchBtn('searchBtn active');
  };

  const HandleCloseBtn = () => {
    setSearchBox('searchBox');
    setCloseBtn('closeBtn');
    setSearchBtn('searchBtn');
    setSearchValue('');
    setSearchActive(false);
  };

  return (
    <Header>
      <Section>
        <h2>INATON 피드</h2>
        <div className="search">
          <span className="icon">
            <i name="search-outline" onClick={HandleSearchBtn} className={searchBtn}>
              <img src={process.env.PUBLIC_URL + '/assets/icon/search.png'} alt="검색창 열기" />
            </i>
            <i name="close-outline" onClick={HandleCloseBtn} className={closeBtn}>
              <img src={process.env.PUBLIC_URL + '/assets/icon/icon-delete-black.png'} alt="검색창 닫기" />
            </i>
          </span>
        </div>
        <div className={searchBox}>
          <input
            onChange={HandleSearchValue}
            ref={searchRef}
            value={searchValue}
            type="text"
            placeholder="Search here..."
          />
        </div>
      </Section>
      {searchValue === '' ? (
        // 검색어가 없을 때
        <></>
      ) : (
        // 검색어가 있을 때
        <SearchResultList>
          {searchResult &&
            searchResult.map((item) => (
              <li key={item._id}>
                <InlineProfileInfo
                  accountname={item.accountname}
                  img={item.image}
                  name={item.username}
                  desc={'@ ' + item.accountname}
                  state="follow"
                />
              </li>
            ))}
        </SearchResultList>
      )}
    </Header>
  );
}
