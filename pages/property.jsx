/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import HouseCard from '../src/components/Property/HouseCard';
import FilterBox from '../src/components/Property/FilterBox';

import Model from '../src/util/filters';

const Property = ({ data }) => {
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
    <div>
      {/* <FilterBox handleInput={handleInput} state={state} /> */}
      {
        grid.length > 0 ? (
          grid.map((item) => (
            <HouseCard data={item} key={item.id} />
          ))
        ) : <div>No properties</div>
      }
    </div>
  );
};

Property.getInitialProps = async () => {
  try {
    const res = await db('/property');
    return { data: res.data };
  } catch (error) {
    // TO DO - RETORNAR MENSAGEM DE VAZIO
    return null;
  }
};

export default Property;
