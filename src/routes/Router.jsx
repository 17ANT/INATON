import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import Splash from '../pages/splash/Splash';
import ChatList from './../pages/chatList/ChatList';
import ChatRoom from './../pages/chatRoom/ChatRoom';
import PostUpload from '../pages/postUpload/PostUpload';
import PostDetail from '../pages/postDetail/PostDetail';
import LoginEmail from '../pages/LoginEmail/LoginEmail';
import MyProfile from '../pages/myProfile/MyProfile';
import YourProfile from '../pages/yourProfile/YourProfile';
import ProfileModification from '../pages/profileModification/ProfileModification';
import Home from './../pages/home/Home';
import Search from './../pages/search/Search';
import NotFound from './../pages/NotFound/NotFound';

import Follower from '../pages/follow/Follower';
import Following from './../pages/follow/Following';
import SignupProfile from '../pages/signup/SignupProfile';
import { SignupContextProvider } from '../Contexts/SignupContext';
import PostModify from '../pages/postModify/PostModify';
import authCheck from '../common/AuthenticationCheck';

export default function Router() {
  // token 검증 및 token 여부를 확인
  authCheck();
  return (
    <SignupContextProvider>
      <BrowserRouter>
        <Routes>
          {/* 토큰이 없어도 볼 수 있는 페이지 isValid : false*/}
          <Route path="/" element={<Splash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/email" element={<LoginEmail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/profile" element={<SignupProfile />} />

          {/* /////////////////////////////////// */}
          {/* 토큰을 가지고 판단 isValid=true*/}
          {/* 토큰이 있으면 아래는 갈 수 있고, 없으면 전부다 404로 가거나 login으로?  */}
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/postupload" element={<PostUpload />} />
          <Route path="/post/:post_id/modify" element={<PostModify />} />
          <Route path="/post/:post_id" element={<PostDetail />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/profile/:accountname" element={<YourProfile />} />
          <Route
            path="/myprofile/modification"
            element={<ProfileModification />}
          />
          <Route path="/profile/:accountname/follower" element={<Follower />} />
          <Route
            path="/profile/:accountname/following"
            element={<Following />}
          />
          <Route path="/*" element={<NotFound />} />
          {/* /////////////////////////////////// */}
          {/* isValid= false인 경우 404를 띄워주는데 이전이 아니라 로그인 페이지로 갈 수 있게  */}

          {/* /////////////////////////////////// */}


        </Routes>
      </BrowserRouter>
    </SignupContextProvider>
  );
}
