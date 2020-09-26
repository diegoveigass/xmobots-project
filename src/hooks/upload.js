import React, { createContext, useContext, useState } from 'react';

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  return (
    <UploadContext.Provider value={{ uploadedFile, setUploadedFile }}>
      {children}
    </UploadContext.Provider>
  );
};

export const useUpload = () => {
  const context = useContext(UploadContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  const { uploadedFile, setUploadedFile } = context;

  return { uploadedFile, setUploadedFile };
};
