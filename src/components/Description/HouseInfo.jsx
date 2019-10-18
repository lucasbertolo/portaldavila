import React from 'react';

const HouseInfo = ({ info }) => (
  <div className="general-info">
    <p>
        Area:
      {' '}
      {info.area}
    </p>
  </div>
);

export default HouseInfo;
