import React, { useEffect, useState } from 'react';

import { TileLayer, Circle, Marker } from 'react-leaflet';

import DrawerContainer from '../../components/Drawer';

import { useUpload } from '../../hooks/upload';
import { parseLatLong } from '../../utils/parseDMSToLatLong';
import parseDMS from '../../utils/parseToDMS';

import { Container, MapContainer } from './styles';

const Dashboard = () => {
  const [initialPosition, setInitialPosition] = useState([0, 0]);
  const { uploadedFile } = useUpload();

  const positions = [];

  if (uploadedFile) {
    uploadedFile.aerodromes.forEach(aerodrome => {
      const coords = parseLatLong(parseDMS(aerodrome.description)[0]);
      positions.push(coords);
    });
  }

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

        {positions.map(position => (
          <div key={position}>
            <Marker position={position} />
            <Circle center={position} radius={5000} />
          </div>
        ))}
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
