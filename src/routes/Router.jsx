import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from '../pages/login/Login';
import SignUp from '../pages/signup/Signup';
import Splash from '../pages/splash/Splash';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}
