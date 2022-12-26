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
import TestPage from '../pages/testPage/TestPage';

export default function Router() {
    return (
        <SignupContextProvider>
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
                    <Route path="/post/:post_id" element={<PostDetail />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/yourprofile" element={<YourProfile />} />
                    <Route path="/myprofile/modification" element={<ProfileModification />} />
                    <Route path="/follower" element={<Follower />} />
                    <Route path="/following" element={<Following />} />

                    <Route path="/test" element={<TestPage />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </SignupContextProvider>
    );
}
