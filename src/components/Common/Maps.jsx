import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px',
};

const Maps = ({ google, lat, lng }) => (
  <Map
    google={google}
    zoom={8}
    style={mapStyles}
    initialCenter={{ lat: Number(lat), lng: Number(lng) }}
  />
);

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Maps);
