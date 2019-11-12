
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
  if (query.isLogged === 'true') {
    // const res = await db(`/visit/${query.user.id}`);
    // return { data: res.data };
    console.log(query);
  }

  return console.log('nao autorizado');

  // TO DO - PAGINA NAO AUTORIZADO
};

export default Visit;
