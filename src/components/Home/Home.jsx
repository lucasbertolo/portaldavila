import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';

const backgroundSrc = 'https://ci.eco.br/wp-content/uploads/2017/11/post_Piracicaba_e_a_segunda_melhor_cidade_do_brasil_segundo_ranking_destacada.jpg';

const Home = () => (
  <div className="idx">
    <img
      src={backgroundSrc}
      alt=""
      className="idx-image"
    />
    <div className="idx-text">
      <header className="idx-header">
        <ul>
          <li>Imóveis</li>
          <li>Equipe</li>
          <li>Trabalhe Conosco</li>
        </ul>
      </header>
      <span className="idx-logo" />
      Remax/Portal
      <div className="arr-down">
        <div>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
