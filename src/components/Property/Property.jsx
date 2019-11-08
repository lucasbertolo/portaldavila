/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import HouseCard from './HouseCard';

import FilterBox from '../Filter/FilterBox';
import Tags from '../Filter/Tags';

import Model from '../../util/filters';
import enums from '../../content/enums';

import { db } from '../Helpers/ApiFetch';

import './Property.scss';

const PropertyView = ({ data, mode }) => {
  const [state, setState] = useState({
    code: 0,
    price: 0,
    type: 0,
    neighborhoodList: [],
    typeList: [],
  });

  const [grid, setGrid] = useState(data || []);

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

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.code > 0) setGrid(Model.EqualsTo(data, Number(state.code), 'id'));

    if (state.price > 0) { setGrid(Model.MoreThan(data, Number(state.price), 'price')); }

    if (state.type > 0) { setGrid(Model.EqualsTo(data, Number(state.type), 'type_id')); }
  }, [state]);

  const checkButton = () => (mode === enums.viewModeProperty.edit ? (
    <nav className="align-bottom-left">
      <Link href="/userarea/manager">
        <button type="button" className="btn-icon add-property">
          <div className="circle">
            <span className="icon arrow" />
          </div>
          <p className="button-text">Add Property</p>
        </button>
      </Link>
    </nav>
  ) : null);

  const addButton = checkButton();
  const selectList = { neighborhoodList: state.neighborhoodList, typeList: state.typeList };
  return (
    <>
      <main className="main-container">
        <FilterBox
          handleInput={handleInput}
          state={state}
          selectList={selectList}
        />
        <Tags />
        {grid.length > 0 ? (
          <section className="cards">
            {grid.map((item) => (
              <HouseCard
                data={item}
                key={item.id}
                mode={mode}
                selectList={selectList}
              />
            ))}
          </section>
        ) : (
          <div>No properties</div>
        )}
      </main>
      {addButton}
    </>
  );
};

export default PropertyView;
