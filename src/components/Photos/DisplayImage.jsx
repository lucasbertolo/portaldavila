import React from 'react';
import { Input } from '../Common/FormComponents';

const DisplayImage = ({ photos }) => {
  const arrayImages = photos.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <div key={index} className="editor-photo" id={index}>
      <img src={item.src} alt="property" />
      <Input
        hasLabel
        htmlFor="alt"
        type="text"
        name="alt"
      />
    </div>
  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
