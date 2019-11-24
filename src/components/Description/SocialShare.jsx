import React, { useState, useEffect } from 'react';

import db from '../Helpers/ApiFetch';
import enums from '../../content/enums';

import WrapperTooltip from '../Common/WrapperTooltip';
import { FavIcon } from '../Common/Icons';

import './SocialShare.scss';


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
            if (initFav.data.length > 0) {
              const current = initFav.data[0].status;
              setFav(current);
            }
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
        const res = await db.post('/favorite', {
          user_id: user.id,
          property_id: propertyId,
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
      <WrapperTooltip title="Adicionar aos favoritos" position="bottom">
        <span>
          <FavIcon isFav={isFav} handleClick={handleClick} />
        </span>
      </WrapperTooltip>
    </div>
  );
}
