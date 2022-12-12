import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import Splash from '../pages/splash/Splash';
import LoginEmail from '../pages/LoginEmail/LoginEmail';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/email" element={<LoginEmail />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
