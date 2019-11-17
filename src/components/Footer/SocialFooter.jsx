import React from 'react';
import Social from './Social';

const SocialFooter = ({ noInfo, bkColor }) => (
  <div className="social-footer">
    <Social noInfo={noInfo} bkColor={bkColor} />
  </div>
);

export default SocialFooter;
