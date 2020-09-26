import React, { useRef } from 'react';

import { Button } from '@material-ui/core';
import TableLocations from '../../pages/TableLocations';

import { useUpload } from '../../hooks/upload';

function Upload() {
  const { setUploadedFile } = useUpload();

  const hiddenInputFile = useRef();

  const handleInput = () => {
    hiddenInputFile.current.click();
  };

  const handleInputChange = event => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = async eventReader => {
      const fileReader = eventReader.target.result;
      setUploadedFile(JSON.parse(fileReader));
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Button onClick={handleInput} variant="contained">
        Upload
        <input
          accept="application/json"
          type="file"
          ref={hiddenInputFile}
          onChange={handleInputChange}
          style={{ display: 'none' }}
        />
      </Button>
    </>
  );
}

export default Upload;
