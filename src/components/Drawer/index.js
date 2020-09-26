import React from 'react';

import { Button, Drawer } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useUpload } from '../../hooks/upload';

import Upload from '../Upload';

const DrawerContainer = () => {
  const history = useHistory();
  const { userLogged } = useAuth();
  const { uploadedFile } = useUpload();

  const handleNavigateToDataFile = () => {
    history.push('data');
  };

  return (
    <Drawer anchor="left" open variant="permanent">
      <span>
        Bem vindo,
        <br />
        {userLogged}
      </span>
      <Upload />
      {uploadedFile !== null && (
        <Button onClick={handleNavigateToDataFile}>Show data table</Button>
      )}
    </Drawer>
  );
};

export default DrawerContainer;
