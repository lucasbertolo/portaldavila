/* eslint-disable react/prop-types */
import React from 'react';
import fetch from 'isomorphic-fetch';

const Control = ({ data }) => (
  <p>
            control:
    {' '}
    {data.login}
  </p>
);

Control.getInitialProps = async ({ query }) => {
  const res = await fetch(`http://localhost:3000/user/${query.id}`);
  const json = await res.json();
  return { data: json };
};

export default Control;
