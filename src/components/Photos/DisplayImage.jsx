import React from 'react';

const DisplayImage = ({ photos }) => {
  const arrayImages = photos.map((item) => (
    <div>
      <img src={item.src} alt="Girl in a jacket" />
    </div>
  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
