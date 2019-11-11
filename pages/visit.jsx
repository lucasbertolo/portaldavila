
import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import Header from '../src/components/Header/Header';
// import enums from '../src/content/enums';

const Visit = ({ data, isLogged }) => (
  <div>
    {/* {isLogged ? (
      <>
        <Header />
      </>
    ) : null } */}
    <Header />
  </div>
);

Visit.getInitialProps = async ({ query }) => {
  if (query.isLogged) {
    console.log(query.id);
    const res = await db(`/visit/${query.id}`);
    console.log(res);
    return { data: res.data };
  }

  return alert('Não autorizado');

  // TO DO - PAGINA NAO AUTORIZADO
};

export default Visit;
