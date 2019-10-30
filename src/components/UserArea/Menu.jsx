import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge, faHorse, faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

const Menu = () => (
  <div className="ctn-menu-usr">
    <div className="items-menu-usr">
      <div className="icon-wrapper-usr">
        <i className="fa-file-text-o">
          <Link href="/userarea/manager">
            <FontAwesomeIcon icon={faHorse} />
          </Link>
        </i>
      </div>
      <div className="project-name">
        <p>PROPERTIES</p>
      </div>
    </div>
    <div className="items-menu-usr">
      <div className="icon-wrapper-usr">
        <Link href="/userarea">
          <i className="fa-th-list">
            <FontAwesomeIcon icon={faCalendarCheck} />
          </i>
        </Link>

      </div>
      <div className="project-name">
        <p>VISIT</p>
      </div>
    </div>
    <div className="items-menu-usr">
      <div className="icon-wrapper-usr">
        <i className="fa-th-large">
          <FontAwesomeIcon icon={faThLarge} />
        </i>
      </div>
      <div className="project-name">
        <p>INFO</p>
      </div>
    </div>
  </div>
);

export default Menu;
