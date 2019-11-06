/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import HouseCard from './HouseCard';
import FilterBox from './FilterBox';

import Model from '../../util/filters';
import enums from '../../content/enums';

import './Property.scss';

const PropertyView = ({ data, mode }) => {
  const [state, setState] = useState({
    code: 0,
    price: 0,
    type: 0,
  });

  const [grid, setGrid] = useState(data || []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.code > 0) setGrid(Model.EqualsTo(data, Number(state.code), 'id'));

    if (state.price > 0) setGrid(Model.MoreThan(data, Number(state.price), 'price'));

    if (state.type > 0) setGrid(Model.EqualsTo(data, Number(state.type), 'type_id'));
  }, [state]);

  const checkButton = () => (
    mode === enums.viewModeProperty.edit
      ? (
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
      )
      : null
  );

  const addButton = checkButton();

  return (
    <>
      <main className="main-container">
        <FilterBox handleInput={handleInput} state={state} />
        {
          grid.length > 0 ? (
            <section className="cards">
              { grid.map((item) => (
                <HouseCard data={item} key={item.id} mode={mode} />
              ))}
            </section>

          ) : <div>No properties</div>
        }
      </main>
      { addButton }
    </>
  );
};


export default PropertyView;
