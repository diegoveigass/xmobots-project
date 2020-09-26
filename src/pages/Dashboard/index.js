import React, { useEffect, useState } from 'react';

import { TileLayer, Marker } from 'react-leaflet';
import DrawerContainer from '../../components/Drawer';

import { Container, MapContainer } from './styles';

const Dashboard = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  return (
    <Container>
      <DrawerContainer />
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
