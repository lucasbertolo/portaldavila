/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import db from '../src/components/Helpers/ApiFetch';

import Header from '../src/components/Header/Header';
import SocialFooter from '../src/components/Footer/SocialFooter';

import HouseWrapper from '../src/components/Description/HouseWrapper';
import { Info } from '../src/components/UserArea/PropertyInfo';
import { Details } from '../src/components/UserArea/PropertyDetails';
import { Features } from '../src/components/UserArea/PropertyFeatures';

import ErrorBox from '../src/components/Helpers/ErrorBox';

const PropertyDescription = ({ data, images, notFound }) => {
  const dataInfo = new Info(data);
  const dataDetails = new Details(data);
  const dataFeature = new Features(data);

  return (
    <div>
      <Header />
      {notFound ? (
        <ErrorBox />
      ) : (
        <HouseWrapper
          info={dataInfo}
          details={dataDetails}
          features={dataFeature}
          images={images}
        />
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
      return { data: res.data.property, images: deserializedImages || [] };
    }
    return { data: {}, images: [] };
  } catch (e) {
    return { data: {}, images: [], notFound: true };
  }
};

export default PropertyDescription;
