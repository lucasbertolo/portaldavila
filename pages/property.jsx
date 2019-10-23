/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import Main from '../src/components/Property/Main';
import FilterBox from '../src/components/Property/FilterBox';

import Model from '../src/util/filters';

const Property = ({ data }) => {
  const [state, setState] = useState({
    code: 0,
    price: 0,
  });

  const [grid, setGrid] = useState(data);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(data);
    if (state.code > 0) setGrid(Model.EqualsTo(data, Number(state.code), 'id'));

    if (state.price > 0) setGrid(Model.MoreThan(data, Number(state.price), 'price'));
  }, [state]);


  return (
    <div>
      <FilterBox handleInput={handleInput} state={state} />
      <Main data={grid} />
    </div>
  );
};

Property.getInitialProps = async () => {
  try {
    const res = await db('/property');
    return { data: res.data };
  } catch (error) {
    return null;
  }
};

export default Property;
