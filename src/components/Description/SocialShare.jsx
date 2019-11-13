import React, { useState } from 'react';
import { db } from '../Helpers/ApiFetch';

import { FavIcon } from '../Common/Icons';
import './SocialShare.scss';

export default function SocialShare() {
  const [isFav, setFav] = useState(false);
  const handleClick = async () => {
    try {
      const res = await db.post('/favorite', {
        user_id: 1,
        property_id: 1,
        status: !isFav,
      });
      if (res) {
        setFav(!isFav);
      }
    } catch {
      console.log('Nao foi possivel completar a ação');
    }
  };
  return (
    <div className="social-box">
      <FavIcon isFav={isFav} handleClick={handleClick} />
    </div>
  );
}
