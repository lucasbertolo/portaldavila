/* eslint-disable react/jsx-props-no-spreading */

import React, { useState, useEffect } from 'react';
import db from '../src/components/Helpers/ApiFetch';

import PropertyView from '../src/components/Property/Property';
import SocialFooter from '../src/components/Footer/SocialFooter';

import ErrorBox from '../src/components/Helpers/ErrorBox';


const Property = (props) => {
  const {
    user, isLogged, data, error,
  } = props;

  const [favList, setFavList] = useState([]);

  useEffect(() => {
    if (isLogged) {
      db.get(`/favorite/${user.id}`)
        .then((res) => {
          setFavList(res.data);
        }).catch();
    }
  }, []);

  return (
    !error ? (
      <div>
        <PropertyView
          isLogged={isLogged}
          user={user}
          data={data}
          favList={favList}
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
    return { error: true };
  }
};

export default Property;
