import React from 'react';

import {
  GarageIcon, BedIcon, BathIcon,
  WashbasinIcon, LivingRoomIcon, KitchenIcon,
  OfficeIcon, LaundryIcon, DiningRoomIcon,
} from '../Common/Icons';

import WrapperTooltip from '../Common/WrapperTooltip';

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
            <WrapperTooltip title="Dormitórios" position="bottom">
              <span className="dormitory-icon">
                <BedIcon />
              </span>
            </WrapperTooltip>
            <p className="icon-info">{dormitory}</p>
          </>

        )}
        {garage > 1 && (
          <>
            <WrapperTooltip title="Vagas de garagem" position="bottom">
              <span className="garage-icon">
                <GarageIcon />
              </span>
            </WrapperTooltip>
            <p className="icon-info">{garage}</p>
          </>

        )}

        {bathroom > 1 && (
          <>
            <WrapperTooltip title="Banheiro" position="bottom">
              <span className="bathroom-icon">
                <BathIcon />
              </span>
            </WrapperTooltip>
            <p className="icon-info">{bathroom}</p>
          </>
        )}

        {kitchen > 1 && (
        <>
          <WrapperTooltip title="Cozinha" position="bottom">
            <span className="kitchen-icon">
              <KitchenIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{kitchen}</p>
        </>
        )}

        {dining_room > 1 && (
        <>
          <WrapperTooltip title="Sala de jantar" position="bottom">
            <span className="dining-room-icon">
              <DiningRoomIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{dining_room}</p>
        </>
        )}

        {laundry > 1 && (
        <>
          <WrapperTooltip title="Lavanderia" position="bottom">
            <span className="laundry-icon">
              <LaundryIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{laundry}</p>
        </>
        )}

        {office > 1 && (
        <>
          <WrapperTooltip title="Escritório" position="bottom">
            <span className="office-icon">
              <OfficeIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{office}</p>
        </>
        )}

        {living_room > 1 && (
        <>
          <WrapperTooltip title="Sala de estar" position="bottom">
            <span className="living-room-icon">
              <LivingRoomIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{living_room}</p>
        </>
        )}

        {washbasin > 1 && (
        <>
          <WrapperTooltip title="Lavabo" position="bottom">
            <span className="washbasin-icon">
              <WashbasinIcon />
            </span>
          </WrapperTooltip>
          <p className="icon-info">{washbasin}</p>
        </>
        )}
      </div>
    </div>
  );
};

export default DetailsBox;
