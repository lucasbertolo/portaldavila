import React from 'react';

import CardContent from './CardContent';
import CardImage from './CardImage';
import CardDivider from './CardDivider';

const HouseCard = ({ data }) => {
  const { url, key, alt } = data;

  return (
    <div className="container-card" key={key}>
      <div className="card">
        <CardImage url={url} alt={alt} />
        <CardDivider />
        <CardContent />
      </div>
    </div>
  );
};

export default HouseCard;
