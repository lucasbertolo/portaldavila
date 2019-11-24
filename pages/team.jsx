import React from 'react';

import TeamContainer from '../src/components/Team/TeamContainer';
import Header from '../src/components/Header/Header';

const Team = (props) => {
  const {
    user, isLogged, logOut, openModalLogin, openModalUser,
  } = props;

  return (
    <div>
      <Header
        user={user}
        isLogged={isLogged}
        logOut={logOut}
        openModalLogin={openModalLogin}
        openModalUser={openModalUser}
      />
      <TeamContainer />
    </div>
  );
};

export default Team;
