import React from 'react';

import enums from '../../content/enums';
import './CardInfo.scss';

const CardInfo = ({
  typeId,
  blockId,
  purposeId,
  selectList,
}) => {
  const type = selectList.typeList[typeId];
  const purpose = Object.keys(enums.purposeOfProperty).filter(
    (key) => enums.purposeOfProperty[key] === purposeId,
  )[0];

  return (
    <div className="card__info">
      <span className="card__category">{`${type} - ${purpose}`}</span>
      <h3 className="card__title">{selectList.neighborhoodList[blockId]}</h3>
    </div>
  );
};

export default CardInfo;
