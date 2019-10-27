import React from 'react';

const CardImage = ({ url }) => (
  <>
    <div className="card__img" style={{ backgroundImage: `url("${url}")` }} />
    <div className="card__img--hover" style={{ backgroundImage: `url("${url}")` }} />
  </>
);

export default CardImage;
