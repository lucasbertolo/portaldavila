/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import Header from '../src/components/Header/Header';
import enums from '../src/content/enums';
import PropertyView from '../src/components/Property/Property';

const Property = ({ data, mode }) => (
  <div>
    <Header />
    <PropertyView mode={mode} data={data} />
  </div>
);
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
    return { mode };
  }
};

export default Property;
