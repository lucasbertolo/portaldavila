import React, { useState, useEffect } from 'react';

import Visit from '../Visit/Visit';
import { db } from '../Helpers/ApiFetch';

import './CardVisitation.scss';

const CardVisitation = (props) => {
  const {
    openModalVisit, closeModalVisit, modalVisit,
    info, user,
  } = props;

  const { price, type_id, neighborhood_id } = info;

  const [state, setState] = useState({
    neighborhoodList: [],
    typeList: [],
  });

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const resultBlock = await db.get('/neighborhood');
        const options = resultBlock.data.map((item) => item.name);

        setState((prevState) => ({
          ...prevState,
          neighborhoodList: options,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    const fetchType = async () => {
      try {
        const resultType = await db.get('/typeofproperty');
        const options = resultType.data.map((item) => item.type);

        setState((prevState) => ({
          ...prevState,
          typeList: options,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchBlock();
    fetchType();
  }, []);

  const kind = state.typeList[type_id];
  const neigh = state.neighborhoodList[neighborhood_id];
  return (
    <div className="card-visit">
      <header className="header">
        <span>
          Venda - R$
          {price}
          ,00
        </span>
        <span>
          {neigh}
          {' '}
          - Piracicaba/SP
        </span>
        <span>{kind}</span>
      </header>
      <main>
        <span>
          Faça uma visita e conheça melhor o imóvel ou contate-nos para mais
          informações
        </span>
      </main>
      <nav className="container-btn">
        <button
          className="btn-1 btn-laydown"
          type="button"
          onClick={openModalVisit}
        >
          Agendar
        </button>
        <Visit
          open={modalVisit}
          handleClose={closeModalVisit}
          user={user}
        />
      </nav>
    </div>
  );
};

export default CardVisitation;
