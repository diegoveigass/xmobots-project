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
    throw new Error('useUpload must be used within a UploadProvider');
  }

  const { uploadedFile, setUploadedFile } = context;

  return { uploadedFile, setUploadedFile };
};
