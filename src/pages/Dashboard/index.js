import React, { useEffect, useState } from 'react';
import { Drawer } from '@material-ui/core';
import { TileLayer, Marker } from 'react-leaflet';

import { useAuth } from '../../hooks/auth';

import { Container, MapContainer } from './styles';
import Upload from '../../components/Upload';

const Dashboard = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const { userLogged } = useAuth();

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
          {userLogged}
        </span>
        <Upload />
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
