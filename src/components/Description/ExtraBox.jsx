import React from 'react';
import {
  HydrantIcon,
  GrillIcon,
  GardenIcon,
  PoolIcon,
  BalconyIcon,
  LadderIcon,
  CameraIcon,
  AirConditionerIcon,
} from '../Common/Icons';

import './ExtraBox.scss';

const ExtraBox = ({ features }) => {
  const {
    garden,
    stairway,
    barbecueGrill,
    balcony,
    pool,
    airConditioner,
    fireSecurity,
    securityCamera,
  } = features;

  return (
    <div className="extra-box">
      <div className="box-extra-icons">
        {garden && (
          <span className="extra-icons">
            <GardenIcon />
          </span>
        )}

        {pool && (
          <span className="extra-icons">
            <PoolIcon />
            <p className="icon-info" />
          </span>
        )}

        {airConditioner && (
        <span className="extra-icons">
          <AirConditionerIcon />
          <p className="icon-info" />
        </span>
        )}

        {balcony && (
          <span className="extra-icons">
            <BalconyIcon />
            <p className="icon-info" />
          </span>
        )}
        {barbecueGrill && (
          <span className="extra-icons">
            <GrillIcon />
            <p className="icon-info" />
          </span>
        )}

        {stairway && (
          <span className="extra-icons">
            <LadderIcon />
            <p className="icon-info" />
          </span>
        )}

        {fireSecurity && (
          <span className="extra-icons">
            <HydrantIcon />
            <p className="icon-info" />
          </span>
        )}

        {securityCamera && (
          <span className="extra-icons">
            <CameraIcon />
            <p className="icon-info" />
          </span>
        )}

      </div>
    </div>
  );
};

export default ExtraBox;
