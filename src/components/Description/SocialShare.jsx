/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

import Menu from '@material-ui/core/Menu';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share';
import db from '../Helpers/ApiFetch';

import WrapperTooltip from '../Common/WrapperTooltip';
import { FavIcon } from '../Common/Icons';

import Toast from '../Helpers/Toast';
import './SocialShare.scss';

const StyledMenu = withStyles({
  paper: {
    background: 'transparent',
  },
})((props) => <Menu elevation={0} getContentAnchorEl={null} {...props} />);

export default function SocialShare({
  user,
  isLogged,
  openModalLogin,
  propertyId,
}) {
  const [isFav, setFav] = useState(false);
  const [toast, setToast] = useState(false);
  const [route, setRoute] = useState('');
  const closeToast = () => setToast(false);

  useEffect(() => {
    console.log(Router.asPath);
    setRoute(Router.route);

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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const openShare = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            <span className="share-btn" onClick={openShare} role="presentation">
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
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <ul className="social-nav model-5">
          <li>
            <TwitterShareButton url={route}>
              <a className="twitter">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </TwitterShareButton>
          </li>
          <li>
            <a className="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a className="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a className="linkedin">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a className="pinterest">
              <FontAwesomeIcon icon={faPinterestP} />
            </a>
          </li>
        </ul>
        <br />
      </StyledMenu>
    </>
  );
}
