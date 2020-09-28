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
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import parseDMS from '../../utils/parseToDMS';
import { useUpload } from '../../hooks/upload';

import logoImg from '../../assets/xmobots-dark.svg';

const TableLocations = () => {
  const { uploadedFile, cleanData } = useUpload();
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container
      style={{
        marginTop: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src={logoImg}
        alt="xmobots"
        style={{ height: 100, justifyContent: 'center' }}
      />
      {!uploadedFile ? (
        <h2 style={{ textAlign: 'center' }}>
          Faça upload de um arquivo para visualizar
        </h2>
      ) : (
        <TableContainer component={Paper}>
          <Table
            arial-label="simple table"
            style={{ backgroundColor: '#f5f5f5' }}
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Nome</TableCell>
                <TableCell align="left">Cidade</TableCell>
                <TableCell align="left">DMS</TableCell>
                <TableCell align="left">Data de criação</TableCell>
                <TableCell align="left">Quantidade de pistas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uploadedFile.aerodromes.map(aero => (
                <TableRow key={aero.name}>
                  <TableCell component="th" scope="row">
                    {aero.name}
                  </TableCell>
                  <TableCell align="left">{aero.city}</TableCell>
                  <TableCell align="left">
                    {parseDMS(aero.description)}
                  </TableCell>
                  <TableCell align="left">{aero.created_at}</TableCell>
                  <TableCell align="left">{aero.runways.length}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Button onClick={handleGoBack} style={{ marginTop: 12 }}>
        Voltar
      </Button>
      <Button onClick={cleanData} style={{ marginTop: 12 }}>
        Limpar dados
      </Button>
    </Container>
  );
};

export default TableLocations;
