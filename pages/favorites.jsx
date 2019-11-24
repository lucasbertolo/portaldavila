/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import db from '../src/components/Helpers/ApiFetch';

import FavoritesView from '../src/components/Favorites/Favorites';
import SocialFooter from '../src/components/Footer/SocialFooter';

import ErrorBox from '../src/components/Helpers/ErrorBox';


const Favorites = (props) => {
  const {
    user, isLogged, data, error,
  } = props;

  const [items, setItems] = useState(data);

  useEffect(() => {
    if (isLogged && !data && !error) {
      db.get(`/property-favorites/${user.id}`)
        .then((res) => {
          setItems(res.data);
        }).catch();
    }
  }, [isLogged]);


  return (
    !error ? (
      <div>
        <FavoritesView data={items} user={user} />
        <SocialFooter />
      </div>
    )
      : <ErrorBox />
  );
};
Favorites.getInitialProps = async ({ query }) => {
  if (query.id) {
    try {
      const res = await db(`/property-favorites/${query.id}`);
      return { data: res.data };
    } catch (error) {
      return { error: true };
    }
  }
  return null;
};

export default Favorites;