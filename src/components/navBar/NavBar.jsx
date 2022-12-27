import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  min-width: 390px;
  border-top: 1px solid var(--border-color);
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  li a {
    width: 84px;
    text-align: center;
    font-size: 10px;
    padding: 12px 0 6px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: var(--font-color);
  }
  li a::before {
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-bottom: 4px;
  }
  .home a::before {
    background: url('/assets/icon/icon-home.png') no-repeat;
    background-size: contain;
  }
  .home a.active::before {
    background: url('/assets/icon/icon-home-fill.png') no-repeat;
    background-size: contain;
  }
  .chat a::before {
    background: url('/assets/icon/icon-message-circle.png') no-repeat;
  }
  .chat a.active::before {
    background: url('/assets/icon/icon-message-circle-fill.png') no-repeat;
    background-size: contain;
  }
  .user a::before {
    background: url('/assets/icon/icon-user.png') no-repeat;
    background-size: contain;
  }
  .user a.active::before {
    background: url('/assets/icon/icon-user-fill.png') no-repeat;
    background-size: contain;
  }
  .post a::before {
    background: url('/assets/icon/icon-edit.png') no-repeat;
    background-size: contain;
  }
  .active {
    font-weight: bold;
  }
`;

export default function NavBar() {
  return (
    <>
      <Nav>
        <NavList>
          <li className="home">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              홈
            </NavLink>
          </li>
          <li className="chat">
            <NavLink
              to="/chatlist"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              채팅
            </NavLink>
          </li>
          <li className="post">
            <NavLink to="/postupload">게시물작성</NavLink>
          </li>
          <li className="user">
            <NavLink
              to="/myprofile"
              className={({ isActive }) => (isActive ? 'active' : '')}>
              프로필
            </NavLink>
          </li>
        </NavList>
      </Nav>
    </>
  );
}
