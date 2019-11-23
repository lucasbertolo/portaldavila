import React from 'react';

import Menu from '../src/components/UserArea/Menu';
import Login from '../src/components/Login/Login';


export default function UserArea(props) {
  const {
    isLogged, user, handleLogin, handleRegister,
  } = props;
  return (
    <>
      {isLogged ? (
        <Menu user={user} isLogged={isLogged} />
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
