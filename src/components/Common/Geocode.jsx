import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.MAP_KEY);
Geocode.setLanguage('en');
Geocode.setRegion('br');
Geocode.enableDebug();


const GetFromCoordinates = ({ lat, long }) => {
  Geocode.fromLatLng(lat, long).then(
    (response) => {
      const address = response.results[0].formatted_address;
      return address;
    },
    (error) => error,
  );
};

const GetFromAddress = ({ address }) => {
  Geocode.fromAddress(address).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return {
        lat,
        lng,
      };
    },
    (error) => error,
  );
};

export {
  GetFromAddress,
  GetFromCoordinates,
};
