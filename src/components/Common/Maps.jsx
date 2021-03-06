import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './Maps.scss';


const Maps = ({ google, lat, lng }) => {
  // Centro de Piracicaba
  const latitude = lat || -22.728420;
  const longitude = lng || -47.649230;

  return (
    <div className="map-container">
      <Map
        google={google}
        zoom={15}
        className="google-map"
        initialCenter={{ lat: Number(latitude), lng: Number(longitude) }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Maps);
