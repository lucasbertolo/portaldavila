/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

import Visit from '../Visit/Visit';

import { GarageIcon, DocumentIcon } from '../Common/Icons';
import WrapperTooltip from '../Common/WrapperTooltip';
import enums from '../../content/enums';
import { db } from '../Helpers/ApiFetch';

import './CardVisitation.scss';

const CardVisitation = (props) => {
  const {
    openModalVisit, closeModalVisit, modalVisit, info, user,
  } = props;

  const {
    price, type_id, neighborhood_id, purpose_id,
  } = info;

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
    <div className="card-visit sm-shadow">
      <header className="header">
        <span className="card-title">
          <span>Venda</span>
          <span>R${price},00</span>
        </span>
        <span className="card-subtitle">
          <span>{neigh} - Piracicaba/SP</span>
        </span>
        <span className="card-rest">
          <span>{kind}</span>
        </span>
      </header>
      <main>
        Faça uma visita e conheça melhor o imóvel ou contate-nos para mais
        informações
        {purpose_id === enums.purposeOfProperty.renting && (
          <div className="document-icon">
            <WrapperTooltip title="Documentos" position="right">
              <span className="document-icon">
                <DocumentIcon />
              </span>
            </WrapperTooltip>
          </div>
        )}
      </main>
      <nav className="container-btn">
        <button
          className="btn-1 btn-laydown"
          type="button"
          onClick={openModalVisit}
        >
          Agendar
        </button>
        <Visit open={modalVisit} handleClose={closeModalVisit} user={user} />
      </nav>
    </div>
  );
};

export default CardVisitation;
