/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';
import PropertyManager from '../src/components/PropertyManager/PropertyManager';

const UserArea = ({ data }) => (
  <div>
    <PropertyManager {...data} />
  </div>
);

UserArea.getInitialProps = async ({ query }) => {
  if (query.id) {
    try {
      const res = await db(`/property/${query.id}`);
      return { data: res.status === 200 ? res.data : null };
    } catch (error) {
      // TODO - REDIRECIONAR USUARIO PARA PAGINA DE ERRO - NAO ENCONTRADO
      return { data: { message: 'User not found' } };
    }
  }
  return null;
};

export default UserArea;
