import React from 'react';
import AboutBox from '../src/components/About/AboutBox';
import Header from '../src/components/Header/Header';

export default function About(props) {
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
      <AboutBox />
    </div>
  );
}
