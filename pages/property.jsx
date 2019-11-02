/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import HouseCard from '../src/components/Property/HouseCard';
import FilterBox from '../src/components/Property/FilterBox';

import Model from '../src/util/filters';
import Header from '../src/components/Header/Header';
import enums from '../src/content/enums';

const Property = ({ data, mode }) => {
  const [state, setState] = useState({
    code: 0,
    price: 0,
    type: 0,
  });

  const [grid, setGrid] = useState(data || []);

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    if (state.code > 0) setGrid(Model.EqualsTo(data, Number(state.code), 'id'));

    if (state.price > 0) setGrid(Model.MoreThan(data, Number(state.price), 'price'));

    if (state.type > 0) setGrid(Model.EqualsTo(data, Number(state.type), 'type_id'));
  }, [state]);


  return (
    <>
      {/* <Header /> */}
      {
        mode === enums.viewModeProperty.edit
          ? (
            <div className="align-bottom-left">
              <button type="button" className="btn-icon add-property">
                <div className="circle">
                  <span className="icon arrow" />
                </div>
                <p className="button-text">Add Property</p>
              </button>
            </div>
          )
          : null
      }
      <section className="cards">
        {/* <FilterBox handleInput={handleInput} state={state} /> */}
        {
          grid.length > 0 ? (
            grid.map((item) => (
              <HouseCard data={item} key={item.id} mode={mode} />
            ))
          ) : <div>No properties</div>
        }
      </section>
    </>
  );
};

Property.getInitialProps = async ({ query }) => {
  let mode = enums.viewModeProperty.view;
  if (query && query.editable) {
    mode = enums.viewModeProperty.edit;
  }
  try {
    const res = await db('/property');
    return { data: res.data, mode };
  } catch (error) {
    // TO DO - RETORNAR MENSAGEM DE VAZIO
    return null;
  }
};

export default Property;
