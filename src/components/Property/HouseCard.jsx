/* eslint-disable no-restricted-globals */
import React from 'react';

import { db } from '../Helpers/ApiFetch';

import CardInfo from './CardInfo';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardIcons from './CardIcons';

import enums from '../../content/enums';
import './HouseCard.scss';

const HouseCard = ({ data, mode, selectList }) => {
  const {
    url,
    price,
    type_id,
    neighborhood_id,
    purpose_id,
    garage,
    dormitory,
    area,
    bathroom,
    property_id,
  } = data;
  const style = mode === enums.viewModeProperty.edit ? {} : { overflow: 'hidden' };

  const handleRemove = (e) => {
    // eslint-disable-next-line no-alert
    const result = confirm('Want to delete?');
    if (result) {
      if (Number(e.target.id)) {
        db.delete(`/property/${e.target.id}`);
      }
    }
  };

  const handleVisibility = (e) => {
    if (Number(e.target.id)) {
      db.get(`/property/info/setvisibility/${e.target.id}&0`);
    }
  };

  return (
    <article className="card" style={style}>
      {mode === enums.viewModeProperty.edit ? (
        <>
          <span
            className="card-visibility"
            onClick={handleRemove}
            onKeyUp={handleRemove}
            role="presentation"
            id={property_id}
          />
          <span
            className="card-remove"
            onClick={handleVisibility}
            onKeyUp={handleVisibility}
            role="presentation"
            id={property_id}
          />
        </>
      ) : null}
      <CardHeader price={price} isFav />
      <CardImage url={url} />
      <CardInfo
        typeId={type_id}
        blockId={neighborhood_id}
        purposeId={purpose_id}
        selectList={selectList}
      />
      <CardIcons
        garage={garage}
        dormitory={dormitory}
        area={area}
        bathroom={bathroom}
      />
    </article>
  );
};

export default HouseCard;
