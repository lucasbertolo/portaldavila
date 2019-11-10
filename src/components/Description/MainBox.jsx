import React from 'react';

import DetailsBox from './DetailsBox';
import AdditionalBox from './AdditionalBox';
import DescriptionBox from './DescriptionBox';

import './MainBox.scss';


const MainBox = ({ details, features }) => (
  <div className="box-wrapper">
    <DetailsBox data={details} />
    <AdditionalBox details={details} />
    <DescriptionBox />
  </div>
);

export default MainBox;
