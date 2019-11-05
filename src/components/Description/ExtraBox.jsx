import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';

import './ExtraBox.scss';

const ExtraBox = () => (
  <div className="extra-box">
    <h3>Informações</h3>
    <div className="box-extra-icons">
      <span className="extra-icons">
        <GarageIcon />
        <p className="icon-info" />
      </span>
      <span className="extra-icons">
        <BedIcon />
        <p className="icon-info" />
      </span>
      <span className="extra-icons">
        <BathIcon />
        <p className="icon-info" />
      </span>
    </div>

  </div>
);

export default ExtraBox;
