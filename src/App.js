import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
};

export default App;
