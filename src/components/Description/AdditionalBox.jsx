import React from 'react';
import { GarageIcon, BedIcon, BathIcon } from '../Common/Icons';

const AdditionalBox = () => (
  <div className="box-additional-info">
    <div className="additional-info">
      <h5>Aceita financiamento</h5>
      <p>O imóvel tem condições de ser financiado</p>
      <h5>Aceita permuta</h5>
      <p>O propietário estuda o envolvimento de outros imoveis no negócio</p>
    </div>

    <div className="additional-icons">
      <span className="box-icon">
        <GarageIcon />
      </span>
      <span className="box-icon">
        <GarageIcon />
      </span>
    </div>

  </div>
);

export default AdditionalBox;
