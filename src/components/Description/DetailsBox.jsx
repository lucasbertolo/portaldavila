import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';
import './DetailsBox.scss';

const DetailsBox = ({ data }) => {
  const { dormitory, bathroom, garage } = data;
  return (
    <div className="box-details">
      <div className="box-column">
        {dormitory > 0 && (
        <span className="box-details-icons">
          <BedIcon />
          <p className="icon-info">{dormitory}</p>
        </span>
        )}
        {garage > 0 && (
        <span className="box-details-icons">
          <GarageIcon />
          <p className="icon-info">{garage}</p>
        </span>
        )}

        {bathroom > 0 && (
        <span className="box-details-icons">
          <BathIcon />
          <p className="icon-info">{bathroom}</p>
        </span>
        )}
      </div>
    </div>
  );
};

export default DetailsBox;
