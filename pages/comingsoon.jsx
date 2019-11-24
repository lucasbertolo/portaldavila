import React from 'react';
import Header from '../src/components/Header/Header';
import OnBuilding from '../src/components/Helpers/OnBuilding';

const ComingSoon = (props) => {
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
      <OnBuilding />
    </div>
  );
};

export default ComingSoon;
