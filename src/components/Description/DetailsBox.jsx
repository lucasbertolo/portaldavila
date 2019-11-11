import React from 'react';
import {
  GarageIcon, BedIcon, BathIcon,
  WashbasinIcon, LivingRoomIcon, KitchenIcon,
  OfficeIcon, LaundryIcon, DiningRoomIcon,
} from '../Common/Icons';
import './DetailsBox.scss';

const DetailsBox = ({ data }) => {
  const {
    dormitory, bathroom, garage, washbasin, living_room,
    office, dining_room, laundry, kitchen,
  } = data;
  return (
    <div className="box-details">
      <div className="box-column">
        {dormitory > 1 && (
          <>
            <span className="dormitory-icon">
              <BedIcon />
            </span>
            <p className="icon-info">{dormitory}</p>
          </>

        )}
        {garage > 1 && (
          <>
            <span className="garage-icon">
              <GarageIcon />
            </span>
            <p className="icon-info">{garage}</p>
          </>

        )}

        {bathroom > 1 && (
          <>
            <span className="bathroom-icon">
              <BathIcon />
            </span>
            <p className="icon-info">{bathroom}</p>
          </>
        )}

        {kitchen > 1 && (
        <>
          <span className="kitchen-icon">
            <KitchenIcon />
          </span>
          <p className="icon-info">{bathroom}</p>
        </>
        )}

        {dining_room > 1 && (
        <>
          <span className="dining-room-icon">
            <DiningRoomIcon />
          </span>
          <p className="icon-info">{bathroom}</p>
        </>
        )}

        {laundry > 1 && (
        <>
          <span className="laundry-icon">
            <LaundryIcon />
          </span>
          <p className="icon-info">{bathroom}</p>
        </>
        )}

        {office > 1 && (
        <>
          <span className="office-icon">
            <OfficeIcon />
          </span>
          <p className="icon-info">{bathroom}</p>
        </>
        )}

        {living_room > 1 && (
        <>
          <span className="living-room-icon">
            <LivingRoomIcon />
          </span>
          <p className="icon-info">{living_room}</p>
        </>
        )}

        {washbasin > 1 && (
        <>
          <span className="washbasin-icon">
            <WashbasinIcon />
          </span>
          <p className="icon-info">{washbasin}</p>
        </>
        )}
      </div>
    </div>
  );
};

export default DetailsBox;
