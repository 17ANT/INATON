import { createContext } from 'react';

const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {
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
