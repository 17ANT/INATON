import { createContext } from 'react';

export const SignupContext = createContext({
    username: null,
    email: null,
    password: null,
    accountname: null,
    intro: null,
    image: null, // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
});
