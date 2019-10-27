import React, { useState, useEffect } from 'react';
import enums from '../../content/enums'
import { db } from '../Helpers/ApiFetch';

const CardInfo = ({ typeId, blockId, purposeId }) => {
  const [state, setState] = useState({
    neighborhoodList: [],
    typeList: [],
  });

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const resultBlock = await db.get('/neighborhood');
        const block = resultBlock.data.map((item) => item.name);
        block.unshift('');


        setState((prevState) => ({
          ...prevState,
          neighborhoodList: block,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    const fetchType = async () => {
      try {
        const resultType = await db.get('/typeofproperty');
        const type = resultType.data.map((item) => item.type);
        type.unshift('');

        setState((prevState) => ({
          ...prevState,
          typeList: type,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchBlock();
    fetchType();
  }, []);

  return (
    <div className="card__info">
      <span className="card__category">
        {state.typeList[typeId]} - 
        {
          Object.keys(enums.purposeOfProperty)
          .filter(function(key) {return enums.purposeOfProperty[key] === purposeId})[0]
        }
      </span>
      <h3 className="card__title">{state.neighborhoodList[blockId]}</h3>
    </div>
  );
};

export default CardInfo;
