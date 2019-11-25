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
      <div className="maps">
        <Maps lat={-22.711063} lng={-47.656581} />
      </div>
      <Location />
    </div>
    <SocialFooter />
  </div>
);

export default AboutBox;
