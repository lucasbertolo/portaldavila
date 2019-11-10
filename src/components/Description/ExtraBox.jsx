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
    barbecue_grill,
    balcony,
    pool,
    air_contioning,
    fire_security,
    security_camera,
  } = features;

  return (
    <div className="extra-box">
      <h3>Informações</h3>
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

        {air_contioning && (
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
        {barbecue_grill && (
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

        {fire_security && (
          <span className="extra-icons">
            <HydrantIcon />
            <p className="icon-info" />
          </span>
        )}

        {security_camera && (
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
