/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';

import Visit from '../Visit/Visit';

import { DocumentIcon } from '../Common/Icons';
import Documents from '../Contact/Documents';
import WrapperTooltip from '../Common/WrapperTooltip';

import enums from '../../content/enums';
import db from '../Helpers/ApiFetch';

import './CardVisitation.scss';

const CardVisitation = (props) => {
  const {
    openModalVisit, closeModalVisit, modalVisit,
    info, user, propertyId, manager,
  } = props;

  const {
    price, type_id, neighborhood_id, purpose_id,
  } = info;

  const [state, setState] = useState({
    neighborhoodList: [],
    typeList: [],
  });

  const [panel, setPanel] = useState(false);

  const handleDocument = () => {
    setPanel(!panel);
  };

  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const resultBlock = await db.get('/neighborhood');
        const options = resultBlock.data.map((item) => item.name);
        options.unshift('');
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
        options.unshift('');

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
  const purpose = purpose_id === enums.purposeOfProperty.renting
    ? 'Locação'
    : 'Venda';

  return (
    <div className="card-visit sm-shadow">
      <header className="header">
        <span className="card-title">
          <span>{purpose}</span>
          <span>R${price}</span>
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
            <span className="document-icon">
              <span
                onClick={handleDocument}
                className="clickable-icon"
                role="presentation"
              />
              <WrapperTooltip title="Documentos necessários para locação" position="top">
                <i>
                  <DocumentIcon />
                </i>
              </WrapperTooltip>
            </span>
          </div>
        )}
      </main>
      <nav className="container-btn">
        <button
          className="btn-1 btn-laydown"
          type="button"
          onClick={openModalVisit}
          disabled={manager}
        >
          Agendar
        </button>
        <Visit
          open={modalVisit}
          handleClose={closeModalVisit}
          user={user}
          propertyId={propertyId}
        />
      </nav>
      <Documents open={panel} handleClose={handleDocument} />
    </div>
  );
};

export default CardVisitation;
