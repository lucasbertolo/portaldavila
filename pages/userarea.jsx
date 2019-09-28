/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import fetch from 'isomorphic-fetch';

import PropertyManagement from '../src/components/UserArea/PropertyManagement';

const UserArea = ({ data, operation }) => (
  <div>
    <PropertyManagement {...data} op={operation} />
  </div>
);

// UserArea.getInitialProps = async ({ query }) => {
//   const result = await fetch(`http://localhost:8000/property/${query.id}`)
//     .then((res) => res.json)
//     .catch(() => []);

//   return result;
// };

UserArea.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:8000/property/${query.id}`);
  const json = await res.json();

  const operation = json ? true : null;

  return { data: json, operation };
};

export default UserArea;
