import React from 'react';

import './CardVisitation.scss';

const CardVisitation = () => {
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <div className="card-visit">
      <span>Venda - R$ 1500,00</span>
      <button type="button" className="btn-hs third">Visitar</button>
      <button type="button" className="btn-hs third">Favoritar </button>

      {/* <button type="button">Adicionar a favoritos</button> */}
    </div>
  );
};

export default CardVisitation;
