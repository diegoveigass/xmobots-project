import React, { useRef } from 'react';

import { Button } from '@material-ui/core';

import { useUpload } from '../../hooks/upload';

function Upload() {
  const { setUploadedFile } = useUpload();

  const hiddenInputFile = useRef();

  const handleInput = () => {
    hiddenInputFile.current.click();
  };

  const handleInputChange = event => {
    const file = event.target.files[0];

    if (file.type !== 'application/json') {
      alert('Somente arquivo JSON pode ser adicionado');
      return;
    }

    alert('Arquivo carregado com sucesso!');

    const reader = new FileReader();

    reader.onload = eventReader => {
      const fileReader = eventReader.target.result;
      setUploadedFile(JSON.parse(fileReader));
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Button fullWidth onClick={handleInput} variant="text">
        Upload file
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
