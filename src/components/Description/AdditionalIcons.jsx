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
    <div className="additional-icons-box">
      <h3>Outros cômodos: </h3>
      <div className="additional-icons">
        {dormitory === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="dormitory-icon">
                <BedIcon />
              </span>
            </div>
            <p>Dormitório</p>
          </div>
        )}
        {garage === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="garage-icon">
                <GarageIcon />
              </span>
            </div>
            <p>Garagem</p>
          </div>
        )}

        {bathroom === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="bathroom-icon">
                <BathIcon />
              </span>
            </div>
            <p>Banheiro</p>
          </div>
        )}
        {kitchen === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="kitchen-icon">
                <KitchenIcon />
              </span>
            </div>

            <p>Cozinha</p>
          </div>
        )}

        {dining_room === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="box-icon dining-room-icon">
                <DiningRoomIcon />
              </span>
            </div>

            <p>Sala de Jantar</p>
          </div>
        )}
        {laundry === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="box-icon laundry-icon">
                <LaundryIcon />
              </span>
            </div>

            <p>Lavanderia</p>
          </div>
        )}
        {office === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="box-icon office-icon">
                <OfficeIcon />
              </span>
            </div>

            <p>Escritório</p>
          </div>
        )}

        {living_room === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="box-icon living-room-icon">
                <LivingRoomIcon />
              </span>
            </div>

            <p>Sala de Estar</p>
          </div>
        )}
        {washbasin === 1 && (
          <div className="icon-box">
            <div className="add-feature">
              <span className="box-icon washbasin-icon">
                <WashbasinIcon />
              </span>
            </div>

            <p>Lavabo</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalIcons;
