import React from 'react';

import DetailsBox from './DetailsBox';
import AdditionalBox from './AdditionalBox';
import DescriptionBox from './DescriptionBox';

const MainBox = ({ info, details, features }) => (
  <div className="box-wrapper">
    <DetailsBox data={details} />
    <AdditionalBox details={details} info={info} />
    <DescriptionBox description={features.description} />
  </div>
);

export default MainBox;
