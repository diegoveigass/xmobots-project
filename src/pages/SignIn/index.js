import { TextField, Button } from '@material-ui/core';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const SignIn = () => {
  const history = useHistory();

  const handleSubmit = useCallback(event => {
    event.preventDefault();

    history.push('dashboard');
  }, []);

  return (
    <Container>
      <h1>Bem vindo, faça seu login</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-basic"
          label="Password"
          type="password"
          variant="outlined"
        />

        <Button type="submit" className="button-form" variant="contained">
          Entrar
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
