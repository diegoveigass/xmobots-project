import React from 'react';
import { AuthProvider } from './hooks/auth';
import { UploadProvider } from './hooks/upload';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <UploadProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </UploadProvider>
    </>
  );
};

export default App;
