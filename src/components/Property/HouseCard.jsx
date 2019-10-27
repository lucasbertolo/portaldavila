import React from 'react';

import CardInfo from './CardInfo';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardIcons from './CardIcons';

const HouseCard = ({ data }) => {
  const {
    url, price, type_id, neighborhood_id, purpose_id, garage, dormitory, area, bathroom,
  } = data;
  return (
    <article className="card">
      <CardHeader price={price} isFav />
      <CardImage url={url} />
      <CardInfo
        typeId={type_id}
        blockId={neighborhood_id}
        purposeId={purpose_id}
      />
      <CardIcons
        garage={garage}
        dormitory={dormitory}
        area={area}
        bathroom={bathroom}
      />
    </article>
  );
};

export default HouseCard;
