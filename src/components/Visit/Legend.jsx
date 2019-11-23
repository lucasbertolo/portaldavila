import React from 'react';
import './Legend.scss';

const Legend = ({ classes }) => (
  <div className={classes}>
    <div>
      <span className="undefined sm-shadow"> </span>
      <p>Indefinido</p>
    </div>
    <div>
      <span className="confirmed sm-shadow"> </span>
      <p>Confirmado</p>
    </div>
    <div>
      <span className="rejected sm-shadow"> </span>
      <p>Rejeitado</p>
    </div>
  </div>
);

export default Legend;
