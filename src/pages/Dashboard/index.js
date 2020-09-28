import React, { useEffect, useState } from 'react';

import { TileLayer, Circle, Marker, Popup } from 'react-leaflet';

import DrawerContainer from '../../components/Drawer';

import { useUpload } from '../../hooks/upload';
import { parseLatLong } from '../../utils/parseDMSToLatLong';
import parseDMS from '../../utils/parseToDMS';

import { Container, MapContainer } from './styles';

const Dashboard = () => {
  const { uploadedFile } = useUpload();

  const positions = [];

  if (uploadedFile) {
    uploadedFile.aerodromes.forEach(aerodrome => {
      const coords = parseLatLong(parseDMS(aerodrome.description)[0]);
      positions.push(coords);
    });
  }

  positions.map(position => console.log(position[0]));

  return (
    <Container>
      <DrawerContainer />
      <MapContainer center={positions[0]} zoom={13}>
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
