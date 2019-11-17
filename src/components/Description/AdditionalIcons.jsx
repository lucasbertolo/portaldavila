import React from 'react';
import {
  KitchenIcon,
  LivingRoomIcon,
  LaundryIcon,
  DiningRoomIcon,
  WashbasinIcon,
  OfficeIcon,
  BedIcon,
  BathIcon,
  GarageIcon,
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
        <div className="icon-box">
          <div className="add-feature">
            <span className="dormitory-icon">
              <BedIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}
      {garage === 1 && (
        <div className="icon-box">
          <div>
            <span className="garage-icon">
              <GarageIcon />
              <p>Dormitório</p>
            </span>
          </div>
        </div>
      )}

      {bathroom === 1 && (
        <div className="icon-box">
          <div className="add-feature">
            <span className="bathroom-icon">
              <BathIcon />
            </span>
          </div>
          <p>Dormitório</p>
        </div>
      )}
      {kitchen === 1 && (
        <div className="icon-box">
          <div>
            <span className="kitchen-icon">
              <KitchenIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}

      {dining_room === 1 && (
        <div className="icon-box">
          <div>
            <span className="box-icon dining-room-icon">
              <DiningRoomIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}
      {laundry === 1 && (
        <div className="icon-box">
          <div>
            <span className="box-icon laundry-icon">
              <LaundryIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}
      {office === 1 && (
        <div className="icon-box">
          <div>
            <span className="box-icon office-icon">
              <OfficeIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}

      {living_room === 1 && (
        <div className="icon-box">
          <div>
            <span className="box-icon living-room-icon">
              <LivingRoomIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}
      {washbasin === 1 && (
        <div className="icon-box">
          <div>
            <span className="box-icon washbasin-icon">
              <WashbasinIcon />
            </span>
            <p>Dormitório</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalIcons;
