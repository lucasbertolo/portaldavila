import React from 'react';

import CardInfo from './CardInfo';
import CardImage from './CardImage';
import CardHeader from './CardHeader';
import CardIcons from './CardIcons';
import enums from '../../content/enums';

const HouseCard = ({ data, mode }) => {
  const {
    url, price, type_id, neighborhood_id, purpose_id,
    garage, dormitory, area, bathroom,
  } = data;

  const style = mode === enums.viewModeProperty.edit ? {} : { overflow: 'hidden' };

  return (
    <article className="card" style={style}>
      {
        mode === enums.viewModeProperty.edit
          ? (
            <>
              <span className="card-visibility" />
              <span className="card-remove" />
            </>
          )

          : null
      }
      <CardHeader price={price} isFav />
      <CardImage url={url} />
      <CardInfo
        typeId={type_id}
        blockId={neighborhood_id}
        purposeId={purpose_id}
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
