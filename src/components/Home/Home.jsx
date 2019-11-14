import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const Home = () => (
  <div className="idx">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
      alt=""
      className="idx-image"
    />
    <div className="idx-text">
      <header className="idx-header">
        <ul>
          <li>Imóveis</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </header>
      <span className="idx-logo" />
      Remax/Portal
      <div className="arr-down">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  </div>
);

export default Home;
