import React from 'react';
import { FavIcon } from '../Common/Icons';

const CardHeader = ({ isFav, code }) => (
  <div className="card__info-hover">
    <FavIcon isFav={isFav} />
    <div className="card__price-info">
      Código -
      {' '}
      {code}
    </div>
  </div>
);

export default CardHeader;
