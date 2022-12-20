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

import TestPage from '../pages/B_TestPage/TestPage';
import Follower from '../pages/follow/Follower';
import Following from './../pages/follow/Following';
import SignupProfile from '../pages/signup/SignupProfile';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signup/profile" element={<SignupProfile />} />
                <Route path="/chatlist" element={<ChatList />} />
                <Route path="/login/email" element={<LoginEmail />} />
                <Route path="/chatroom" element={<ChatRoom />} />
                <Route path="/postupload" element={<PostUpload />} />
                <Route path="/postdetail" element={<PostDetail />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/yourprofile" element={<YourProfile />} />
                <Route path="/myprofile/modification" element={<ProfileModification />} />
                <Route path="/follower" element={<Follower />} />
                <Route path="/following" element={<Following />} />

                {/* 테스트용 임시 페이지 */}
                <Route path="/btest" element={<TestPage />} />

                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
