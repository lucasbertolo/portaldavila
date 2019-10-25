import React from 'react';

const CardImage = ({ url, alt }) => (
  <div className="card__image-container">
    <figure>
      <img className="card__image" src={url} alt={alt} />
    </figure>
  </div>
);

export default CardImage;
