import React from 'react';

const DisplayImage = ({ photos }) => {
  const arrayImages = photos.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <span
      key={index}
      style={{ gridArea: `grid-${index}`, background: `url(${item.src}) no-repeat center` }}
    />

  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
