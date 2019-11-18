import React from 'react';
import enums from '../../content/enums';
import './CardInfo.scss';

const CardInfo = (props) => {
  const {
    typeId, blockId, purposeId, selectList, price,
  } = props;
  const type = selectList.typeList[typeId];

  const purposeLabel = () => {
    switch (purposeId) {
      case enums.purposeOfProperty.renting:
        return 'Locação';
      case enums.purposeOfProperty.selling:
        return 'Venda';
      default:
        return '';
    }
  };

  const label = purposeLabel();
  return (
    <div className="card__info">
      <span className="card__category">
        {`${label} - ${type}`}
      </span>
      <h3 className="card__title">
        <span>{`R$${price}`}</span>
        <span>{`${selectList.neighborhoodList[blockId]}`}</span>
      </h3>
    </div>
  );
};

export default CardInfo;
