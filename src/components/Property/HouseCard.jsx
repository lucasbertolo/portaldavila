import React from 'react';

import CardInfo from './CardInfo';
import CardImage from './CardImage';
import CardHeader from './CardHeader';

const HouseCard = ({ data }) => {
  const {
    url, price, type_id, neighborhood_id, purpose_id
  } = data;

  return (
    <article className="card">
      <CardHeader price={price} />
      <CardImage url={url} />
      <CardInfo typeId={type_id} blockId={neighborhood_id} purposeId={purpose_id} />
    </article>
  );
};

export default HouseCard;
