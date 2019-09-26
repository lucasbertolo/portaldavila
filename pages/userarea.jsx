/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import fetch from 'isomorphic-fetch';

import PropertyManagement from '../src/components/UserArea/PropertyManagement';

const UserArea = ({ data }) => (
  <div>
    <PropertyManagement {...data} />
  </div>
);

UserArea.getInitialProps = async ({ query }) => {
  const result = await fetch(`http://localhost:8000/user/${query.id}`)
    .then((res) => res.json)
    .catch(() => []);

  return result;
};

export default UserArea;
