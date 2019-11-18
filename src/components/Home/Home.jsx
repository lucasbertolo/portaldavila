import React from 'react';
import Link from 'next/link';

import './Home.scss';

const backgroundSrc = 'https://ik.imagekit.io/2agnc6wu5cbty/remaxportal/piracicaba-min_hsSCd2ECg.jpg';

const Home = () => (
  <div className="idx">
    <img src={backgroundSrc} alt="" className="idx-image" />
    <div className="idx-text">
      <header className="idx-header">
        <ul>
          <Link href="/property">
            <li>Imóveis</li>
          </Link>
          <Link href="/team">
            <li>Equipe</li>
          </Link>
          <Link href="/comingsoon">
            <li>Trabalhe Conosco</li>
          </Link>
        </ul>
      </header>
      <span className="idx-logo" />
      Remax/Portal
    </div>
  </div>
);

export default Home;
