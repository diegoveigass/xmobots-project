import React, { useEffect, useState } from 'react';
import { Drawer, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { TileLayer, Marker } from 'react-leaflet';

import { Container, MapContainer } from './styles';

const Dashboard = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const history = useHistory();

  const { user } = history.location.state;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <Drawer anchor="left" open variant="permanent">
        <span>
          Bem vindo,
          <br />
          {user}
        </span>
        <Button variant="contained" component="span">
          Upload
        </Button>
      </Drawer>
      <MapContainer center={initialPosition} zoom={15}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={initialPosition} />
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
