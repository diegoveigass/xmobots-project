import React from 'react';
import AppProvider from './hooks/index';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyles />
      <Routes />
    </AppProvider>
  );
};

export default App;
