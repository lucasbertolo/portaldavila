/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faImage } from '@fortawesome/free-solid-svg-icons';

import { Input } from '../Common/FormComponents';

const DisplayImage = ({
  photos, handleChange, removePhoto, setCover,
}) => {
  const arrayImages = photos.map((item, index) => (
    <span
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      style={{ gridArea: `grid-${index}` }}
    >
      <img
        className={item.isCover ? 'active md-shadow' : 'md-shadow'}
        src={item.url}
        alt="property"
      />

      <Input
        placeholder="Digite a descrição aqui"
        name={`alt${index}`}
        htmlFor={index}
        value={item.alt}
        onChange={handleChange}
      />
      <div id={item.id || item.url} onClick={removePhoto} className="remove-photo">
        <i className="input-icon fa">
          <FontAwesomeIcon
            icon={faTrashAlt}
          />
        </i>
      </div>

      <div id={item.url} onClick={setCover} className="set-cover">
        <i className="input-icon fa">
          <FontAwesomeIcon
            icon={faImage}
          />
        </i>
      </div>
    </span>
  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
