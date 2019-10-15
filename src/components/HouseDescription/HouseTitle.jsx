import React from 'react';

const HouseTitle = ({
  typeList, neighborhoodList, typeId, neighId,
}) => (
  <h1>
    {typeList[typeId]}
              -
    {neighborhoodList[neighId]}
  </h1>
);

export default HouseTitle;
