import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/xmobots-dark.svg';

import { Container } from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSignUp = event => {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('email', email);
    data.append('password', password);
    data.append('password_confirmation', passwordConfirmation);

    if (password !== passwordConfirmation) {
      alert('Senha não bate com a confirmação!');
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    alert('Cadastro criado com sucesso!');

    history.push('/');
  };

  const handleBackToLogin = () => {
    history.push('/');
  };

  const condition =
    !name || !email || !password || !passwordConfirmation || error;

  return (
    <Container>
      <img src={logoImg} alt="xmobots" />
      <h1>Cadastro</h1>
      <form onSubmit={handleSignUp}>
        <TextField
          required
          variant="outlined"
          label="Name"
          type="name"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <TextField
          required
          variant="outlined"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
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

        <TextField
          error={error}
          required
          label="Password Confirmation"
          name="password_confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={event => setPasswordConfirmation(event.target.value)}
          variant="outlined"
        />

        <Button
          disabled={condition}
          type="submit"
          className="button-form"
          variant="contained"
        >
          Criar
        </Button>
        <Button
          onClick={handleBackToLogin}
          className="button-form-back"
          variant="contained"
        >
          Voltar
        </Button>
      </form>
    </Container>
  );
};

export default SignUp;
