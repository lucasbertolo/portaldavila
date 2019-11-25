/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import db from '../src/components/Helpers/ApiFetch';

import PropertyView from '../src/components/Property/Property';
import SocialFooter from '../src/components/Footer/SocialFooter';

import ErrorBox from '../src/components/Helpers/ErrorBox';
import Header from '../src/components/Header/Header';

const Property = (props) => {
  const {
    user,
    isLogged,
    data,
    error,
    logOut,
    openModalLogin,
    openModalUser,
    manager,
  } = props;

  const [favList, setFavList] = useState([]);

  useEffect(() => {
    if (isLogged) {
      db.get(`/favorite/${user.id}`)
        .then((res) => {
          setFavList(res.data);
        })
        .catch();
    }
  }, []);

  return !error ? (
    <div>
      <Header
        user={user}
        isLogged={isLogged}
        logOut={logOut}
        openModalLogin={openModalLogin}
        openModalUser={openModalUser}
      />
      <PropertyView
        isLogged={isLogged}
        user={user}
        data={data}
        favList={favList}
        manager={manager}
      />
      <SocialFooter />
    </div>
  ) : (
    <ErrorBox
      internal
      user={user}
      isLogged={isLogged}
      logOut={logOut}
      openModalLogin={openModalLogin}
      openModalUser={openModalUser}
    />
  );
};
Property.getInitialProps = async ({ query }) => {
  const manager = query && query.manager;
  try {
    const res = await db('/property');
    return { data: res.data, manager };
  } catch (error) {
    return { error: true };
  }
};

export default Property;
