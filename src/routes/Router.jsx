import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import Splash from '../pages/splash/Splash';

import ChatList from './../pages/chatList/ChatList';
import ChatRoom from './../pages/chatRoom/ChatRoom';
import PostUpload from '../pages/postUpload/PostUpload';
import LoginEmail from '../pages/LoginEmail/LoginEmail';

import MyProfile from '../pages/myProfile/MyProfile';
import YourProfile from '../pages/yourProfile/YourProfile';
import ProfileModification from '../pages/profileModification/ProfileModification';
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Splash />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/chatlist' element={<ChatList />} />
                <Route path='/login/email' element={<LoginEmail />} />
                <Route path='/chatroom' element={<ChatRoom />} />
                <Route path='/postupload' element={<PostUpload />} />
                <Route path='/myprofile' element={<MyProfile />} />
                <Route path='/yourprofile' element={<YourProfile />} />
                <Route path='/myprofile/modification' element={<ProfileModification />} />
            </Routes>
        </BrowserRouter>
    );
}
