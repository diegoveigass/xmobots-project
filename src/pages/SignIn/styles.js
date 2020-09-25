import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  max-width: 700px;

  margin: 0 auto;

  h1 {
    margin: 24px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    div + div {
      margin-top: 12px;
    }

    .button-form {
      margin-top: 12px;
    }
  }
`;
