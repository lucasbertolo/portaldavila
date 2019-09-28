/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import fetch from 'isomorphic-fetch';
import config from '../src/content/config';

import PropertyManager from '../src/components/Property/PropertyManager';

const UserArea = ({ data, operation }) => (
  <div>
    <PropertyManager {...data} op={operation} />
  </div>
);

UserArea.getInitialProps = async ({ query }) => {
  let json;
  let operation;

  if (Object.entries(query).length !== 0 && query.constructor === Object) {
    const res = await fetch(`${config.urlDev}/property/${query.id}`);
    json = await res.json();
    operation = true;
  } else { operation = false; }

  return { data: json, operation };
};

export default UserArea;
