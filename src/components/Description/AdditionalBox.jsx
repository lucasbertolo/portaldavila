import React from 'react';
import AdditionalIcons from './AdditionalIcons';

import './AdditionalBox.scss';

const AdditionalBox = ({ info, details }) => {
  const { building_loan, exchange } = info;
  // const brand = true;
  const { gourmet_space, suite } = details;
  return (
    <div className="box-additional-info">

      <div className="additional-info">
        {building_loan && (
        <>
          <h5>Aceita financiamento</h5>
          <p>O imóvel tem condições de ser financiado</p>
        </>
        )}
        {exchange && (
        <>
          <h5>Aceita permuta</h5>
          <p>O propietário estuda o envolvimento de outros imoveis no negócio</p>
        </>
        )}
        {/* {brand && <h5>Recém construído</h5>} */}

        {suite > 0 && (
        <>
          <h5>Suítes</h5>
          <p>
            {suite}
            {' '}
            dormitórios possuem banheiros acoplados
          </p>
        </>
        )}

        {gourmet_space > 0 && (
        <>
          {' '}
          <h5>Área gourmet</h5>
          {' '}
          <p>Possui área personalizada gourmet</p>
        </>
        )}
      </div>

      <AdditionalIcons details={details} />
    </div>
  );
};

export default AdditionalBox;
