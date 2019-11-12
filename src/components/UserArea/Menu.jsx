import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThLarge, faHorse, faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import './Menu.scss';

const Menu = ({ isLogged, user }) => (
  <div className="ctn-menu-usr">
    <Link href={{ pathname: '/property', query: { editable: true } }} as="/userarea/listproperty">
      <div className="items-menu-usr">
        <div className="icon-wrapper-usr">
          <i className="fa-file-text-o">
            <FontAwesomeIcon icon={faHorse} />
          </i>
        </div>
        <div className="project-name">
          <p>PROPERTIES</p>
        </div>
      </div>
    </Link>

    <Link href={{ pathname: '/visit', query: { isLogged, user } }} as="/userarea/visit">
      <div className="items-menu-usr">
        <div className="icon-wrapper-usr">
          <i className="fa-th-list">
            <FontAwesomeIcon icon={faCalendarCheck} />
          </i>
        </div>
        <div className="project-name">
          <p>VISIT</p>
        </div>
      </div>
    </Link>
    {/*
    <Link href="/comingsoon">
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
    </Link> */}
  </div>
);

export default Menu;
