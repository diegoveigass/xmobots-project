import React from 'react';

import { AuthProvider } from './auth';
import { UploadProvider } from './upload';

const AppProvider = ({ children }) => (
  <AuthProvider>
    <UploadProvider>{children}</UploadProvider>
  </AuthProvider>
);

export default AppProvider;
