import React from 'react';

import { Input } from '../Common/FormComponents';

const DisplayImage = ({ photos, handleChange }) => {
  const arrayImages = photos.map((item, index) => (
    <span
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      style={{ gridArea: `grid-${index}` }}
    >
      <img src={item.src} alt="property" />
      <Input
        placeholder="Digite a descrição aqui"
        name={`alt${index}`}
        htmlFor={index}
        value={item.alt}
        onChange={handleChange}
      />
    </span>
  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
