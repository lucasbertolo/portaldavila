/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import db from '../src/components/Helpers/ApiFetch';

import Header from '../src/components/Header/Header';
import PropertyView from '../src/components/Property/Property';
import SocialFooter from '../src/components/Footer/SocialFooter';

import { checkToken } from '../src/util/user';
import ErrorBox from '../src/components/Helpers/ErrorBox';

const Property = ({ data, error }) => {
  const [state, setState] = useState({
    isLogged: false,
    user: {},
    favList: [],
  });

  useEffect(() => {
    try {
      checkToken()
        .then((item) => {
          if (item) {
            db.get(`/favorite/${item.user.id}`)
              .then((res) => {
                setState({
                  isLogged: item.isLogged,
                  user: item.user,
                  favList: res.data,
                });
              }).catch();
          }
        })
        .catch();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    !error ? (
      <div>
        <Header />
        <PropertyView
          isLogged={state.isLogged}
          user={state.user}
          data={data}
          favList={state.favList}
        />
        <SocialFooter />
      </div>
    )
      : <ErrorBox />


  );
};
Property.getInitialProps = async () => {
  try {
    const res = await db('/property');
    return { data: res.data };
  } catch (error) {
    // TO DO - RETORNAR MENSAGEM DE VAZIO
    return { error: true };
  }
};

export default Property;
