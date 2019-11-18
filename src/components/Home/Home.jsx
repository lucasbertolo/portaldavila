import React from 'react';

import './Home.scss';

const backgroundSrc = 'https://ik.imagekit.io/2agnc6wu5cbty/remaxportal/piracicaba-min_hsSCd2ECg.jpg';

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

    </div>
  </div>
);

export default Home;
