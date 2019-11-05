import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';

import './CardIcons.scss';

const CardIcons = ({
  bathroom, area, dormitory, garage,
}) => (
  <span className="card__icons">
    <span className="icon-container">
      <GarageIcon />
      <p className="icon-info">{garage}</p>
    </span>
    <span className="icon-container">
      <BedIcon />
      <p className="icon-info" style={{ marginLeft: '8px' }}>{dormitory}</p>
    </span>
    <span className="icon-container">
      <BathIcon />
      <p className="icon-info">{bathroom}</p>
    </span>
    <span className="icon-container">
      {area}
      <p className="icon-info">m&#178;</p>
    </span>
  </span>
);

export default CardIcons;
