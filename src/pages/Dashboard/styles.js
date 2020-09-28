import styled from 'styled-components';

import { Map } from 'react-leaflet';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;

  .MuiDrawer-paper {
    padding: 16px;

    span {
      margin-bottom: 12px;
    }
  }
`;

export const MapContainer = styled(Map)`
  width: 100vw;
  height: 100vh;
  border-radius: 8px;
  margin-bottom: 24px;
`;
