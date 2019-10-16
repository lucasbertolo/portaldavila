import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px',
};

const Maps = ({ google }) => (
  <Map
    google={google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: 47.444, lng: -122.176 }}
  />
);

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Maps);
