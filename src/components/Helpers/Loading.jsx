import React from 'react';
import { PropagateLoader } from 'react-spinners';

import './Loading.scss';

const PlaceHolderCard = () => (
  <div className="loading">
    <div className="container">
      <div className="content">
        <div className="line line__1" />
        <div className="line line__2" />
        <div className="line line__3" />
        <div className="line line__4" />
        <div className="line line__5" />
        <div className="line line__6" />
        <div className="line line__7" />
        <div className="line line__8" />
        <div className="circle" />
      </div>
    </div>
  </div>
);

export function OverlayLoading({ status }) {
  return (
    <div className="overlay-loader">
      <div>
        <PropagateLoader
          size={25}
          color="#36D7B7"
          loading={status}
        />
      </div>
    </div>
  );
}

export default PlaceHolderCard;
