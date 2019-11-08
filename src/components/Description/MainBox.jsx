import React from 'react';

import DetailsBox from './DetailsBox';
import AdditionalBox from './AdditionalBox';
import DescriptionBox from './DescriptionBox';

import './MainBox.scss';


const MainBox = ({ features }) => (
  <div className="box-wrapper">
    <DetailsBox />
    <AdditionalBox />
    <DescriptionBox />
  </div>
);

export default MainBox;
