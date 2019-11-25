import React from 'react';

import Header from '../src/components/Header/Header';
import ErrorBox from '../src/components/Helpers/ErrorBox';
import Register from '../src/components/UserArea/RegisterUser';

const RegisterUser = (props) => {
  const {
    user, isLogged, logOut, openModalLogin, openModalUser, handleRegister,
  } = props;

  const allowAccess = user && isLogged;

  return (
    <>
      <Header
        user={user}
        isLogged={isLogged}
        logOut={logOut}
        openModalLogin={openModalLogin}
        openModalUser={openModalUser}
      />
      {
        allowAccess ? (
          <Register handleRegister={handleRegister} />
        ) : <ErrorBox auth />
    }
    </>
  );
};

export default RegisterUser;
