import React, { useRef, useState } from 'react';

import { Button } from '@material-ui/core';

function Upload() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const hiddenInputFile = useRef();

  const handleInput = () => {
    hiddenInputFile.current.click();
  };

  const handleInputChange = event => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = async eventReader => {
      const fileReader = eventReader.target.result;
      console.log(fileReader.toString());
    };

    reader.readAsDataURL(file);
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
