import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { GarageIcon } from '../Common/Icons';
import './ContactBox.scss';


export default function ContactBox() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="contact-box">
      <div className="social-btns">
        <span className="btn whatsapp">
          <i className="fa fa-whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </i>
        </span>
        <span className="btn whatsapp">
          <i className="fa fa-whatsapp">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </span>
        <span className="btn whatsapp">
          <i className="fa fa-whatsapp">
            <FontAwesomeIcon icon={faPhone} />
          </i>
        </span>
      </div>
    </div>
  );
}
