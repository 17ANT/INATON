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
  z-index: 20;
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
    background: url('https://17ant.github.io/INATON/assets/icon/icon-home.png?raw=true') no-repeat;
    background-size: contain;
  }
  .home a.active::before {
    background: url('https://17ant.github.io/INATON/assets/icon/icon-home-fill.png?raw=true') no-repeat;
    background-size: contain;
  }
  .chat a::before {
    background: url('https://17ant.github.io/INATON/assets/icon/icon-message-circle.png?raw=true') no-repeat;
  }
  .chat a.active::before {
    background: url('https://17ant.github.io/INATON/assets//icon/icon-message-circle-fill.png?raw=true') no-repeat;
    background-size: contain;
  }
  .user a::before {
    background: url('https://17ant.github.io/INATON/assets/icon/icon-user.png?raw=true') no-repeat;
    background-size: contain;
  }
  .user a.active::before {
    background: url('https://17ant.github.io/INATON/assets/icon/icon-user-fill.png?raw=true') no-repeat;
    background-size: contain;
  }
  .post a::before {
    background: url('https://17ant.github.io/INATON/assets/icon/icon-edit.png?raw=true') no-repeat;
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
            <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
              홈
            </NavLink>
          </li>
          <li className="chat">
            <NavLink to="/chatlist" className={({ isActive }) => (isActive ? 'active' : '')}>
              채팅
            </NavLink>
          </li>
          <li className="post">
            <NavLink to="/postupload">게시물작성</NavLink>
          </li>
          <li className="user">
            <NavLink end to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
              프로필
            </NavLink>
          </li>
        </NavList>
      </Nav>
    </>
  );
}
