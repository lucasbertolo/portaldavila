import React from 'react';
import {
  KitchenIcon, LivingRoomIcon, LaundryIcon,
  DiningRoomIcon, WashbasinIcon, OfficeIcon,
  BedIcon, BathIcon, GarageIcon,
} from '../Common/Icons';

const AdditionalIcons = ({ details }) => {
  const {
    dining_room,
    laundry,
    office,
    living_room,
    washbasin,
    kitchen,
    dormitory,
    garage,
    bathroom,
  } = details;

  return (
    <div className="additional-icons">
      {dormitory === 1 && (
      <span className="dormitory-icon">
        <BedIcon />
      </span>
      )}
      {garage === 1 && (
        <span className="garage-icon">
          <GarageIcon />
        </span>
      )}

      {bathroom === 1 && (
        <span className="bathroom-icon">
          <BathIcon />
        </span>
      )}
      {kitchen === 1 && (
      <span className="kitchen-icon">
        <KitchenIcon />
      </span>
      )}


      {dining_room === 1 && (
        <span className="box-icon dining-room-icon">
          <DiningRoomIcon />
        </span>
      )}
      {laundry === 1 && (
        <span className="box-icon laundry-icon">
          <LaundryIcon />
        </span>
      )}
      {office === 1 && (
        <span className="box-icon office-icon">
          <OfficeIcon />
        </span>
      )}

      {living_room === 1 && (
        <span className="box-icon living-room-icon">
          <LivingRoomIcon />
        </span>
      )}
      {washbasin === 1 && (
        <span className="box-icon washbasin-icon">
          <WashbasinIcon />
        </span>
      )}
    </div>
  );
};

export default AdditionalIcons;
