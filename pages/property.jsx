/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import Main from '../src/components/Property/Main';
import Filter from '../src/components/Property/Filter';

const Property = ({ data }) => (
  <div>
    <Filter />
    <Main data={data} />
  </div>
);

Property.getInitialProps = async () => {
  try {
    const res = await db('/property');
    return { data: res.data };
  } catch (error) {
    return null;
  }
};

export default Property;
