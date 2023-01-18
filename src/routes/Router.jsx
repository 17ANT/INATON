import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
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
import NotFound from './../pages/NotFound/NotFound';

import Follower from '../pages/follow/Follower';
import Following from './../pages/follow/Following';
import SignupProfile from '../pages/signup/SignupProfile';
import { SignupContextProvider } from '../Contexts/SignupContext';
import PostModify from '../pages/postModify/PostModify';
import MapModal from '../components/map/MapModal';
import getAPI from '../common/GetAPI';

export default function Router() {
  const token = localStorage.getItem('token');
  const [auth, setAuth] = useState(!!token);
  // token 검증 및 token 여부를 확인

  const authTest = async () => {
    if (token) {
      const res = await getAPI('/user/checktoken');
      setAuth(res.isValid);
    } else {
      setAuth(false);
    }
  };

  useEffect(() => {
    authTest();
  }, []);

  return (
    <SignupContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Splash auth={auth} />} />
          {auth ? (
            <>
              {/* 토큰이 있고 토큰이 유효할 때 */}
              <Route path="/home" element={<Home />} />
              <Route path="/chatlist" element={<ChatList />} />
              <Route path="/chatroom" element={<ChatRoom />} />
              <Route path="/postupload" element={<PostUpload />} />
              <Route path="/post/:post_id/modify" element={<PostModify />} />
              <Route path="/post/:post_id" element={<PostDetail />} />
              <Route path="/profile" element={<MyProfile setAuth={setAuth} />} />
              <Route path="/profile/:accountname" element={<YourProfile />} />
              <Route path="/myprofile/modification" element={<ProfileModification />} />
              <Route path="/profile/:accountname/follower" element={<Follower />} />
              <Route path="/profile/:accountname/following" element={<Following />} />
              <Route path="/map" element={<MapModal />} />
            </>
          ) : (
            <>
              {/* 토큰이 없거나 유효하지 않을 때 */}
              <Route path="/login" element={<Login />} />
              <Route path="/login/email" element={<LoginEmail setAuth={setAuth} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup/profile" element={<SignupProfile />} />
            </>
          )}
          {/* 404 */}
          <Route path="/*" element={<NotFound auth={auth} />} />
        </Routes>
      </BrowserRouter>
    </SignupContextProvider>
  );
}
