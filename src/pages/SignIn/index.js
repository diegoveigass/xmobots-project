import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../hooks/auth';

import { Container } from './styles';

const SignIn = () => {
  const { name, setName } = useContext(AuthContext);

  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSignIn = event => {
    event.preventDefault();

    history.push('dashboard');
  };

  return (
    <Container>
      <h1>Logon</h1>
      <form onSubmit={handleSignIn}>
        <TextField
          required
          variant="outlined"
          label="User"
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          required
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          variant="outlined"
        />

        <Button type="submit" className="button-form" variant="contained">
          Entrar
        </Button>
        <Link to="/signup">Realizar cadastro</Link>
      </form>
    </Container>
  );
};

export default SignIn;
