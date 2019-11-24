/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import InfoDialog from '../Contact/InfoDialog';
import ModalEmail from '../Contact/ModalEmail';

const Social = ({ noInfo, bkColor }) => {
  const [info, setInfo] = useState(false);
  const [email, setEmail] = useState(false);

  const openInfo = () => {
    setInfo(true);
  };
  const openEmail = () => {
    setEmail(true);
  };
  const handleClose = () => {
    setInfo(false);
    setEmail(false);
  };

  return (
    <div className="bg-social" style={{ backgroundColor: bkColor }}>
      <div className="align-bottom">
        <div className="social-btns">
          <a
            className="btn whatsapp"
            href="https://api.whatsapp.com/send?phone=5519996211991"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Whatsapp"
          >
            <i className="fa fa-whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </i>
          </a>
          <a
            className="btn mail"
            onClick={openEmail}
            aria-label="Contact"
            role="presentation"
          >
            <i className="fa fa-mail">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </a>
          <a
            className="btn instagram"
            href="https://google.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
            <i className="fa fa-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </i>
          </a>
          <a
            className="btn facebook"
            href="https://google.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
          >
            <i className="fa fa-facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </i>
          </a>
          {/* <a className="btn info" onClick={openDialog} target="_blank" rel="noreferrer noopener" aria-label="Info"> */}

          <a
            className="btn info-ft"
            href="https://google.com"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
          >
            <i className="fa fa-academic">
              <FontAwesomeIcon icon={faInfo} />
            </i>
          </a>
        </div>
      </div>
      <InfoDialog open={info} handleClose={handleClose} />
      <ModalEmail open={email} handleClose={handleClose} />
    </div>
  );
};

export default Social;
