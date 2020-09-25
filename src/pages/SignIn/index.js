import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { Container } from './styles';

const SignIn = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignIn = event => {
    event.preventDefault();

    history.push('dashboard', { user });
  };

  return (
    <Container>
      <h1>Logon</h1>
      <form onSubmit={handleSignIn}>
        <TextField
          required
          id="outlined-basic"
          variant="outlined"
          label="User"
          type="text"
          name="user"
          value={user}
          onChange={event => setUser(event.target.value)}
        />
        <TextField
          required
          id="outlined-basic"
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
