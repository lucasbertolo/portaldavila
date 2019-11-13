
import React from 'react';
import { db } from '../src/components/Helpers/ApiFetch';

import Header from '../src/components/Header/Header';
import enums from '../src/content/enums';
import Schedule from '../src/components/Visit/Schedule';
// import enums from '../src/content/enums';

const Visit = ({ data, isLogged }) => (
  <div>
    {/* {isLogged ? (
      <>
        <Header />
      </>
    ) : null } */}
    <Header />
    <Schedule data={data} />
  </div>
);

Visit.getInitialProps = async ({ query }) => {
  if (query.isLogged === 'true') {
    if (Number(query.type_id) === enums.userType.guest) {
      const res = await db(`/visit/${query.id}`);
      return { data: res.data };
    }
    if (Number(query.type_id) === enums.userType.consultant) {
      const res = await db.post('/visitschedule');
      // {
      //   // username: query.username, // usar token
      // });
      return { data: res.data };
    }

    return { data: [] };
  }


  return console.log('nao autorizado');

  // TO DO - PAGINA NAO AUTORIZADO
};

export default Visit;
