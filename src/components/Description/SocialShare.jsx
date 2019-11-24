import React, { useState, useEffect } from 'react';

import db from '../Helpers/ApiFetch';

import WrapperTooltip from '../Common/WrapperTooltip';
import { FavIcon } from '../Common/Icons';

import './SocialShare.scss';
import Toast from '../Helpers/Toast';


export default function SocialShare({
  user, isLogged, openModalLogin, propertyId,
}) {
  const [isFav, setFav] = useState(false);
  const [toast, setToast] = useState(false);

  const closeToast = () => setToast(false);

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
        // eslint-disable-next-line no-console
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
        setToast(true);
      }
    } else {
      openModalLogin();
    }
  };
  return (
    <>
      <Toast
        open={toast}
        handleClose={closeToast}
        status="error"
        msg="Não foi possivel completar a ação, tente novamente mais tarde"
      />
      <div className="social-box">
        <WrapperTooltip title="Adicionar aos favoritos" position="bottom">
          <span>
            <FavIcon isFav={isFav} handleClick={handleClick} />
          </span>
        </WrapperTooltip>
      </div>
    </>
  );
}
