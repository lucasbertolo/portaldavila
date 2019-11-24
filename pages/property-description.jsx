/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import db from '../src/components/Helpers/ApiFetch';

import SocialFooter from '../src/components/Footer/SocialFooter';

import HouseWrapper from '../src/components/Description/HouseWrapper';
import { Info, Details, Features } from '../src/components/Helpers/Models';
import Header from '../src/components/Header/Header';

import ErrorBox from '../src/components/Helpers/ErrorBox';

const PropertyDescription = ({
  data,
  images,
  notFound,
  propertyId,
  user,
  isLogged,
  openModalLogin,
  logOut,
  openModalUser,
}) => {
  const dataInfo = new Info(data);
  const dataDetails = new Details(data);
  const dataFeature = new Features(data);

  return (
    <div>
      {notFound ? (
        <>
          <ErrorBox />
        </>
      ) : (
        <>
          <Header
            user={user}
            isLogged={isLogged}
            logOut={logOut}
            openModalLogin={openModalLogin}
            openModalUser={openModalUser}
          />
          <HouseWrapper
            user={user}
            isLogged={isLogged}
            info={dataInfo}
            details={dataDetails}
            features={dataFeature}
            images={images}
            openModalLogin={openModalLogin}
            propertyId={Number(propertyId)}
          />
        </>
      )}
      <SocialFooter />
    </div>
  );
};
PropertyDescription.getInitialProps = async ({ query }) => {
  try {
    const res = await db(`/property-description/${query.id}`);
    if (res) {
      const deserializedImages = res.data.images.map((x) => JSON.parse(x));
      return {
        data: res.data.property,
        images: deserializedImages || [],
        propertyId: query.id,
      };
    }
    return { data: {}, images: [], propertyId: 0 };
  } catch (e) {
    return { data: {}, images: [], notFound: true };
  }
};

export default PropertyDescription;
