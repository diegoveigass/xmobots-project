import React, { createContext, useContext, useEffect, useState } from 'react';

const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState(() => {
    const storagedData = localStorage.getItem('@xmobots_data');
    if (storagedData) {
      return JSON.parse(storagedData);
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('@xmobots_data', JSON.stringify(uploadedFile));
  }, [uploadedFile]);

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
