/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faImage } from '@fortawesome/free-solid-svg-icons';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';


import './DisplayImage.scss';


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
        className={item.iscover ? 'active md-shadow' : 'md-shadow'}
        src={item.url}
        alt="property"
      />
      <FormControl className="photo-input" variant="outlined" fullWidth>
        <OutlinedInput
          id={`${index}`}
          name={`alt${index}`}
          value={item.alt}
          onChange={handleChange}
          placeholder="Descrição"
          startAdornment={(
            <InputAdornment position="start" className="rmv-photo">
              <span id={item.id || item.url} onClick={removePhoto} />
              <FontAwesomeIcon
                icon={faTrashAlt}
              />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end" className="set-cover">
              <span id={item.url} onClick={setCover} />
              <FontAwesomeIcon
                icon={faImage}
              />
            </InputAdornment>
          )}
          type="text"
        />
      </FormControl>
    </span>
  ));

  return (
    <div className="container-editor-images">
      {arrayImages}
    </div>
  );
};

export default DisplayImage;
