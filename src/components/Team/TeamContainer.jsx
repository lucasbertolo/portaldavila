import React from 'react';
import './TeamContainer.scss';

const TeamContainer = () => (

  <div>
    <div className="c_50_50 c_50_50_first">
      <div className="c_50_50_image">
        <img src="https://placeimg.com/580/300/arch/grayscale" alt="" />
      </div>
      <div className="c_50_50_content">
        <div className="c_50_50_content_info">
          <h2 className="c_50_50_content_info--heading">Enim blandit volutpat</h2>
          <p className="c_50_50_content_info--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    </div>

    <div className="c_50_50 c_50_50_first_second">
      <div className="c_50_50_content">
        <div className="c_50_50_content_info">
          <h2 className="c_50_50_content_info--heading">Enim blandit volutpat</h2>
          <p className="c_50_50_content_info--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
      <div className="c_50_50_image">
        <img src="https://placeimg.com/580/500/animals/grayscale" alt="" />
      </div>
    </div>
  </div>
);

export default TeamContainer;
