import React from 'react';

import Menu from '../src/components/UserArea/Menu';
import Login from '../src/components/Login/Login';

import Header from '../src/components/Header/Header';

export default function UserArea(props) {
  const {
    isLogged,
    user,
    handleLogin,
    handleRegister,
    logOut,
    openModalLogin,
    openModalUser,
  } = props;
  return (
    <>
      {isLogged ? (
        <>
          <Header
            user={user}
            isLogged={isLogged}
            logOut={logOut}
            openModalLogin={openModalLogin}
            openModalUser={openModalUser}
          />
          <Menu user={user} isLogged={isLogged} />
        </>
      ) : (
        <Login
          container
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      )}
    </>
  );
}
