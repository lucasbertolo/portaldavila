import React from 'react';

import History from './History';
import Location from './Location';
import SocialFooter from '../Footer/SocialFooter';

import Maps from '../Common/Maps';

import './AboutBox.scss';

const AboutBox = () => (
  <div className="about-box">
    <History />
    <div className="location">
      <Maps />
      <Location />
    </div>
    <SocialFooter noInfo bkColor="rgba(0,0,0,0.2)" />
  </div>
);

export default AboutBox;
