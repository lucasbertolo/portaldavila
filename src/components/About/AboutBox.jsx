import React from 'react';
import History from './History';
import Location from './Location';

import Maps from '../Common/Maps';

import './AboutBox.scss';

const AboutBox = () => (
  <div className="about-box">
    <History />
    <div className="location">
      {/* <Maps lat={-22.711063} lng={-47.656581} /> */}
      <Location />
    </div>
  </div>
);

export default AboutBox;
