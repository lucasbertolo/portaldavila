import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';

const DetailsBox = () => (
  <div className="box-details">
    <div className="box-column">
      <span className="box-details-icons">
        <GarageIcon />
        <p className="icon-info" />
      </span>

      <span className="box-details-icons">
        <GarageIcon />
        <p className="icon-info" />
      </span>

      <span className="box-details-icons">
        <GarageIcon />
        <p className="icon-info">4</p>
      </span>

      <span className="box-details-icons">
        <GarageIcon />
        <p className="icon-info" />
      </span>
    </div>
  </div>
);

export default DetailsBox;
