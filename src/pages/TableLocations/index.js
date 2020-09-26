import React from 'react';

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useUpload } from '../../hooks/upload';

const TableLocations = () => {
  const { uploadedFile } = useUpload();

  console.log(uploadedFile);
  return <Container maxWidth="sm">data</Container>;
};

export default TableLocations;
