import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './Maps.scss';

const mapStyles = {
  width: '400px',
  height: '400px',
};

const Maps = ({ google, lat, lng }) => (
  <div className="map-container">
    {/* <Map
      google={google}
      zoom={15}
      style={mapStyles}
      initialCenter={{ lat: Number(lat), lng: Number(lng) }}
    /> */}
  </div>
);

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Maps);
