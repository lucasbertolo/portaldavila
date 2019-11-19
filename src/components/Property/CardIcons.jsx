import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';
import WrapperTooltip from '../Common/WrapperTooltip';
import './CardIcons.scss';

const CardIcons = ({
  bathroom, area, dormitory, garage,
}) => (
  <span className="card__icons">
    <span className="icon-container">
      <WrapperTooltip title="garagem" position="bottom">
        <span className="garage-icon-sm">
          <GarageIcon />
        </span>
      </WrapperTooltip>
      <p className="icon-info">{garage}</p>
    </span>
    <span className="icon-container">
      <WrapperTooltip title="Dormitórios" position="bottom">
        <span className="dormitory-icon-sm">
          <BedIcon />
        </span>
      </WrapperTooltip>
      <p className="icon-info" style={{ marginLeft: '8px' }}>
        {dormitory}
      </p>
    </span>
    <span className="icon-container">
      <WrapperTooltip title="Banheiro" position="bottom">
        <span className="bathroom-icon-sm">
          <BathIcon />
        </span>
      </WrapperTooltip>
      <p className="icon-info">{bathroom}</p>
    </span>
    <span className="icon-container">
      <WrapperTooltip title="Área do imóvel" position="bottom">
        <>
          {area}
          <p className="icon-info">m&#178;</p>
        </>
      </WrapperTooltip>
    </span>
  </span>
);

export default CardIcons;
