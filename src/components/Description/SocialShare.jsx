import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
} from 'react-share';
import db from '../Helpers/ApiFetch';

import WrapperTooltip from '../Common/WrapperTooltip';
import { FavIcon } from '../Common/Icons';


import Toast from '../Helpers/Toast';
import './SocialShare.scss';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

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
      <div className="sub-slider">
        <div className="social-box">
          <WrapperTooltip title="Adicionar aos favoritos" position="bottom">
            <span>
              <FavIcon isFav={isFav} handleClick={handleClick} />
            </span>
          </WrapperTooltip>
          <WrapperTooltip title="Compartilhar" position="bottom">
            <span className="share-btn">
              <FontAwesomeIcon icon={faShareAlt} aria-label="share" />
            </span>
          </WrapperTooltip>
        </div>
        <h1>
        Código -
          {' '}
          {propertyId}
        </h1>
      </div>

    </>
  );
}
