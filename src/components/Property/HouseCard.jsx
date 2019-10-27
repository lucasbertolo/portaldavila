import React from 'react';

import CardInfo from './CardInfo';
import CardImage from './CardImage';
import CardHeader from './CardHeader';

const HouseCard = ({ data }) => {
  console.log(data);
  const {
    url, price,
  } = data;

  return (
    <article className="card">
      <CardHeader price={price} />
      <CardImage url={url} />
      <CardInfo />
    </article>
  );
};

export default HouseCard;
