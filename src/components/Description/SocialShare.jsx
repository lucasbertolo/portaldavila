import React, { useState, useEffect } from 'react';
import db from '../Helpers/ApiFetch';

import { FavIcon } from '../Common/Icons';
import './SocialShare.scss';
import enums from '../../content/enums';

export default function SocialShare({
  user, isLogged, openModalLogin, propertyId,
}) {
  const [isFav, setFav] = useState(false);

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        if (isLogged) {
          const initFav = await db.get(`/favorite/${user.id}&${propertyId}`);
          if (initFav) {
            const current = initFav.data[0].status;
            setFav(current);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchFavorite();
  }, [isLogged]);

  const handleClick = async () => {
    if (isLogged) {
      try {
        if (user.type_id === enums.userType.guest) {
          const res = await db.post('/favorite', {
            user_id: user.id,
            property_id: propertyId,
            status: !isFav,
          });
          if (res) {
            setFav(!isFav);
          }
        } else {
          console.log('Essa ação só é permitidada para visitantes');
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
