/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import fetch from 'isomorphic-fetch';

import PropertyManagement from '../src/components/AreaUser/PropertyManagement';

const AreaUser = ({ data }) => (
  <div>
    <PropertyManagement {...data} />
  </div>
);

AreaUser.getInitialProps = async ({ query }) => {
  const result = await fetch(`http://localhost:8000/user/${query.id}`)
    .then((res) => res.json)
    .catch(() => []);

  return result;
};

export default AreaUser;
