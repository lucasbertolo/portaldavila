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

import WrapperTooltip from '../Common/WrapperTooltip';

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

  const checkEmpty = Object.values(features).filter((key) => key === true);

  return (
    <>
      {checkEmpty.length > 0 && (
        <div className="fieldset">
          <div className="legend">Extras</div>

          <div className="extra-box">
            <div className="box-extra-icons">
              {garden && (
                <WrapperTooltip title="Jardim" position="bottom">
                  <span className="extra-icons">
                    <GardenIcon />
                  </span>
                </WrapperTooltip>
              )}

              {pool && (
                <WrapperTooltip title="Piscina" position="bottom">
                  <span className="extra-icons">
                    <PoolIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}

              {airConditioner && (
                <WrapperTooltip title="Ar condicionado" position="bottom">
                  <span className="extra-icons">
                    <AirConditionerIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}

              {balcony && (
                <WrapperTooltip title="Sacada" position="bottom">
                  <span className="extra-icons">
                    <BalconyIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}
              {barbecueGrill && (
                <WrapperTooltip title="Churrasqueira" position="bottom">
                  <span className="extra-icons">
                    <GrillIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}

              {stairway && (
                <WrapperTooltip title="Escadas" position="bottom">
                  <span className="extra-icons">
                    <LadderIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}

              {fireSecurity && (
                <WrapperTooltip title="Segurança Incêndios" position="bottom">
                  <span className="extra-icons">
                    <HydrantIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}

              {securityCamera && (
                <WrapperTooltip title="Sistema de segurança" position="bottom">
                  <span className="extra-icons">
                    <CameraIcon />
                    <p className="icon-info" />
                  </span>
                </WrapperTooltip>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExtraBox;
