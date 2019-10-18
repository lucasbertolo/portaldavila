/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';
import Main from '../src/components/Grid/Main';

const Property = ({ data }) => (
  <div>
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
