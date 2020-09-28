import React, { useEffect, useState } from 'react';

import { TileLayer, Circle, Marker, Popup } from 'react-leaflet';

import DrawerContainer from '../../components/Drawer';

import { useUpload } from '../../hooks/upload';
import { parseLatLong } from '../../utils/parseDMSToLatLong';
import parseDMS from '../../utils/parseToDMS';

import { Container, MapContainer } from './styles';

const Dashboard = () => {
  const [location, setLocation] = useState([0, 0]);
  const { uploadedFile } = useUpload();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setLocation([latitude, longitude]);
    });
  }, []);

  const positions = [];

  if (uploadedFile) {
    uploadedFile.aerodromes.forEach(aerodrome => {
      const coords = parseLatLong(parseDMS(aerodrome.description)[0]);
      positions.push(coords);
    });
  }

  return (
    <Container>
      <DrawerContainer />
      <MapContainer center={uploadedFile ? positions[0] : location} zoom={14}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map(position => (
          <Marker key={position} position={position}>
            <Circle center={position} radius={5000} />
            <Popup>
              Latitude: {position[0]} <br />
              Longitude: {position[1]}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Container>
  );
};

export default Dashboard;
