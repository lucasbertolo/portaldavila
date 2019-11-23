import React, { useEffect, useState } from 'react';
import db from '../Helpers/ApiFetch';

import HouseCard from '../Property/HouseCard';
import './Favorites.scss';

const FavoritesView = ({ data, user }) => {
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

  const selectList = {
    neighborhoodList: state.neighborhoodList,
    typeList: state.typeList,
  };
  return (
    <div className="favorites-grid">
      {data && data.length > 0 ? (
        <section className="cards">
          {data.map((item) => (
            <HouseCard
              data={item}
              key={item.property_id}
              user={user}
              selectList={selectList}
              isFav
            />
          ))}
        </section>
      ) : (
        <div>Nenhum imóvel encontrado :/</div>
      )}
    </div>
  );
};

export default FavoritesView;
