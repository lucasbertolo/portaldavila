import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarCheck,
  faStar,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';
import enums from '../../content/enums';

import './Menu.scss';

const Menu = ({ isLogged, user }) => {
  const { username, id, type_id } = user;
  return (
    <div className="ctn-menu-usr">
      {Number(type_id) === enums.userType.consultant && (
        <Link
          href={{ pathname: '/property', query: { manager: true } }}
          as="/property"
        >
          <div className="items-menu-usr">
            <div className="icon-wrapper-usr">
              <i className="fa-file-text-o">
                <FontAwesomeIcon icon={faWarehouse} />
              </i>
            </div>
            <div className="project-name">
              <p>Imóveis</p>
            </div>
          </div>
        </Link>
      )}

      <Link
        href={{
          pathname: '/visit',
          query: {
            isLogged,
            username,
            id,
            type_id,
          },
        }}
        as="/visit"
      >
        <div className="items-menu-usr">
          <div className="icon-wrapper-usr">
            <i className="fa-th-list">
              <FontAwesomeIcon icon={faCalendarCheck} />
            </i>
          </div>
          <div className="project-name">
            <p>Visitas</p>
          </div>
        </div>
      </Link>

      {Number(type_id) === enums.userType.guest && (
        <Link
          href={{
            pathname: '/favorites',
            query: {
              id,
            },
          }}
          as="/favorites"
        >
          <div className="items-menu-usr">
            <div className="icon-wrapper-usr">
              <i className="fa-th-large">
                <FontAwesomeIcon icon={faStar} />
              </i>
            </div>
            <div className="project-name">
              <p>Favoritos</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Menu;
