import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';

const AdditionalIcons = ({ details }) => {
  const {
    dining_room,
    gourmet_space,
    laundry,
    office,
    room,
    suite,
    living_room,
    washbasin,
  } = details;

  const dining = 5;
  return (
    <div className="additional-icons">
      {dining > 0 && (
        <span className="box-icon">
          <s />
        </span>
      )}
      {gourmet_space > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {laundry > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {office > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {room > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {suite > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {living_room > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
      {washbasin > 0 && (
        <span className="box-icon">
          <GarageIcon />
        </span>
      )}
    </div>
  );
};

export default AdditionalIcons;
