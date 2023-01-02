import { createContext } from 'react';

// export const SignupContext = createContext({
//     username: null,
//     email: null,
//     password: null,
//     accountname: null,
//     intro: null,
//     image: null, // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
// });

// {
//     "user": {
//             "username": String*,
//             "email": String*,
//             "password": String*,
//             "accountname": String*,
//             "intro": String,
//             "image": String // 예시) https://mandarin.api.weniv.co.kr/1641906557953.png
//     }
// }

const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {
    // const accountname = localStorage.getItem('accountname');
    // const token = localStorage.getItem('token');
    // const username = localStorage.getItem('username');
    const signupInfo = {
        user: {
            username: null,
            email: null,
            password: null,
            accountname: null,
            intro: null,
            image: null,
        },
    };

    return <SignupContext.Provider value={{ signupInfo }}>{children}</SignupContext.Provider>;
};

export { SignupContext, SignupContextProvider };
