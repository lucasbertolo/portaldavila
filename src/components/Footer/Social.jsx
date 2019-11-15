import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,

} from '@fortawesome/free-brands-svg-icons';
import { faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Social = () => (
  <div className="bg-social">
    <div className="align-bottom">
      <div className="social-btns">
        <a className="btn whatsapp" href="https://api.whatsapp.com/send?phone=5519981320147" target="_blank" rel="noreferrer noopener" aria-label="Whatsapp">
          <i className="fa fa-whatsapp">
            <FontAwesomeIcon icon={faWhatsapp} />
          </i>
        </a>
        <a className="btn mail" href="mailto:lms.arquitetura@outlook.com" target="_blank" rel="noreferrer noopener" aria-label="Contact">
          <i className="fa fa-mail">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </a>
        <a className="btn instagram" href="https://br.pinterest.com/lmsarquitetura/" target="_blank" rel="noreferrer noopener" aria-label="Instagram">
          <i className="fa fa-pinterest">
            <FontAwesomeIcon icon={faInstagram} />
          </i>
        </a>
        <a className="btn facebook" href="https://www.facebook.com/profile.php?id=100000227483945" target="_blank" rel="noreferrer noopener" aria-label="Facebook">
          <i className="fa fa-facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </i>
        </a>
        <a className="btn info" href="http://lattes.cnpq.br/1605377522472063" target="_blank" rel="noreferrer noopener" aria-label="Info">
          <i className="fa fa-academic">
            <FontAwesomeIcon icon={faInfo} />
          </i>
        </a>
      </div>
    </div>

  </div>
);

export default Social;
