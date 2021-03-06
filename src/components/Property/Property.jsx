/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import HouseCard from './HouseCard';
import FilterBox from '../Filter/FilterBox';

import { ValidationGrid } from '../Helpers/Validation';

import enums from '../../content/enums';
import db from '../Helpers/ApiFetch';

import './Property.scss';

const PropertyView = ({
  data, user, favList, manager,
}) => {
  const [state, setState] = useState({
    neighborhoodList: [],
    typeList: [],
  });

  const [filterList, setFilterList] = useState([]);
  const [grid, setGrid] = useState(data || []);

  const setFieldList = (list) => {
    setFilterList(list);
  };

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

  useEffect(() => {
    if (data) {
      const items = data.slice(0);
      const result = ValidationGrid(items, filterList);
      setGrid(result);
    }
  }, [filterList]);

  const checkButton = () => (
    user && user.type_id === enums.userType.consultant && manager ? (
      <nav className="align-bottom-left">
        <Link href={{ pathname: '/manager' }}>
          <button type="button" className="btn-icon add-property">
            <div className="circle">
              <span className="icon arrow" />
            </div>
            <p className="button-text">Adicionar imóveis</p>
          </button>
        </Link>
      </nav>
    ) : null);

  const addButton = checkButton();
  const selectList = {
    neighborhoodList: state.neighborhoodList,
    typeList: state.typeList,
  };
  return (
    <>
      {addButton}
      <main className="main-container">
        <FilterBox
          selectList={selectList}
          setFieldList={setFieldList}
        />

        {grid.length > 0 ? (
          <section className="cards">
            {grid.map((item) => {
              let status = false;
              if (favList && favList.length > 0) {
                const getStatus = favList.filter(
                  (fav) => fav.property_id === item.property_id,
                );
                status = getStatus.length > 0;
              }
              return (
                <HouseCard
                  data={item}
                  key={item.property_id}
                  user={user}
                  selectList={selectList}
                  isFav={status}
                  manager={manager}
                />
              );
            })}
          </section>
        ) : (
          <div className="no-content">
            <h3>Não há itens para serem exibidos</h3>
          </div>
        )}
      </main>
      {addButton}
    </>
  );
};

export default PropertyView;
