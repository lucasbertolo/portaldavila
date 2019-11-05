import React from 'react';
import './HouseTitle.scss';

const HouseTitle = ({
  typeList, neighborhoodList, typeId, neighId,
}) => (
  <>

    <h1 className="house-title">
      {/* {typeList[typeId]} */}
             Teste - NOVA PIRACICABA
      {/* {neighborhoodList[neighId]} */}
    </h1>
    <h4>Piracicaba - SP</h4>
  </>
);

export default HouseTitle;
