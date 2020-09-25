import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLogged, setUserLogged] = useState(() => {
    const storagedName = localStorage.getItem('@xmobots_userLogged');
    if (storagedName) {
      return JSON.parse(storagedName);
    }
    return '';
  });

  useEffect(() => {
    localStorage.setItem('@xmobots_userLogged', JSON.stringify(userLogged));
  }, [userLogged]);

  return (
    <AuthContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  const { userLogged, setUserLogged } = context;

  return { userLogged, setUserLogged };
};
