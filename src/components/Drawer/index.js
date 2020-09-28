import React from 'react';

import { Button, Drawer } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useUpload } from '../../hooks/upload';

import Upload from '../Upload';

import logoImg from '../../assets/xmobots-dark.svg';

const DrawerContainer = () => {
  const history = useHistory();
  const { userLogged } = useAuth();
  const { uploadedFile } = useUpload();

  const handleNavigateToDataFile = () => {
    history.push('data');
  };

  return (
    <Drawer
      PaperProps={{ style: { backgroundColor: '#E0E0E0' } }}
      anchor="left"
      variant="permanent"
    >
      <img src={logoImg} alt="xmobots" />
      <span>
        Bem vindo,
        <br />
        {userLogged}
      </span>
      <Upload />
      {uploadedFile !== null && (
        <Button
          fullWidth
          style={{ marginTop: 12 }}
          onClick={handleNavigateToDataFile}
        >
          Data table
        </Button>
      )}
    </Drawer>
  );
};

export default DrawerContainer;
