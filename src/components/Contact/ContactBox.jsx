import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import enums from '../../content/enums';
import { db } from '../Helpers/ApiFetch';

import './ContactBox.scss';

export default function ContactBox({ user }) {
  const [option, setOption] = React.useState(user.contact_type);

  const handleClick = (e) => {
    const con = Number(e.target.id);
    setOption(con);
    db.put('/user', {
      user_id: user.id,
      contact_type: con,
    })
      .then()
      // eslint-disable-next-line no-console
      .catch(() => console.log('Erro ao atualizar'));
  };

  const { whatsApp } = enums.contactOption;
  const { email } = enums.contactOption;
  const { phone } = enums.contactOption;

  return (
    <div className="contact-box">
      <div className="social-btns">
        <div className={option === whatsApp ? 'active' : ''}>
          <span className="btn btn-contact whatsapp">
            <div
              className="option"
              onClick={handleClick}
              id={whatsApp}
              onKeyDown={handleClick}
              role="presentation"
            />
            <i className="fa">
              <FontAwesomeIcon icon={faWhatsapp} />
            </i>
          </span>
        </div>

        <div className={option === email ? 'active' : ''}>
          <span className="btn btn-contact mail">
            <div
              className="option"
              onClick={handleClick}
              id={email}
              onKeyDown={handleClick}
              role="presentation"
            />
            <i className="fa">
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
          </span>
        </div>
        <div className={option === phone ? 'active' : ''}>
          <span className="btn btn-contact phone">
            <div
              className="option"
              onClick={handleClick}
              id={phone}
              onKeyDown={handleClick}
              role="presentation"
            />
            <i className="fa">
              <FontAwesomeIcon icon={faPhone} />
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}
