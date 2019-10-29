import React from 'react';
import { FavIcon, PriceIcon } from '../Common/Icons';

const CardHeader = ({ price, isFav }) => (
  <div className="card__info-hover">
    <FavIcon isFav={isFav} />
    <div className="card__price-info">
      <PriceIcon />
      <span className="card__value">
        {`${price.toString().concat(', 00')}`}
      </span>
    </div>
  </div>
);

export default CardHeader;
