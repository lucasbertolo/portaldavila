import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const mapStyles = {
  width: '600px',
  height: '400px',
};

const Maps = ({ google, lat, lng }) => {
  // Centro de Piracicaba
  const latitude = lat || -22.728420;
  const longitude = lng || -47.649230;

  return (
    <div className="map-container">
      <Map
        google={google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: Number(latitude), lng: Number(longitude) }}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.MAP_KEY,
})(Maps);
