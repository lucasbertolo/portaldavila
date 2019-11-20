import React, { useState } from 'react';
import db from '../Helpers/ApiFetch';

import { FavIcon } from '../Common/Icons';
import './SocialShare.scss';

export default function SocialShare({ user, isLogged, openModalLogin }) {
  const [isFav, setFav] = useState(false);
  const handleClick = async () => {
    if (isLogged) {
      try {
        const res = await db.post('/favorite', {
          user_id: user.id,
          property_id: 1,
          status: !isFav,
        });
        if (res) {
          setFav(!isFav);
        }
      } catch {
        console.log('Nao foi possivel completar a ação');
      }
    } else {
      openModalLogin();
    }
  };
  return (
    <div className="social-box">
      <FavIcon isFav={isFav} handleClick={handleClick} />
    </div>
  );
}
