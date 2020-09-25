import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [name, setName] = useState('');

  return (
    <AuthContext.Provider value={{ name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
