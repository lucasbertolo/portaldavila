import React from 'react';
import AdditionalIcons from './AdditionalIcons';

import './AdditionalBox.scss';

const AdditionalBox = ({ details }) => {
  const { exchange } = details;
  const { loan } = details;
  // const brand = true;
  const { gourmet_space } = details;
  return (
    <div className="box-additional-info">

      <div className="additional-info">
        {exchange && (
        <>
          <h5>Aceita financiamento</h5>
          <p>O imóvel tem condições de ser financiado</p>
        </>
        )}
        {loan && (
        <>
          <h5>Aceita permuta</h5>
          <p>O propietário estuda o envolvimento de outros imoveis no negócio</p>
        </>
        )}
        {/* {brand && <h5>Recém construído</h5>} */}

        {gourmet_space > 0 && <h5>Possui área gourmet</h5>}
      </div>

      <AdditionalIcons details={details} />
    </div>
  );
};

export default AdditionalBox;
