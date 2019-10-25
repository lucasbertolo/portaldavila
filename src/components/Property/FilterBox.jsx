/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUpload, faDollarSign, faWarehouse, faSearch,
} from '@fortawesome/free-solid-svg-icons';

export default function FilterBox({ state, handleInput }) {
  return (
    <>
      <div className="primary-nav">

        <button href="#" type="button" className="hamburger open-panel nav-toggle">
          <span className="screen-reader-text">Menu</span>
          <span className="icon">
            <FontAwesomeIcon
              icon={faSearch}
            />
          </span>
        </button>

        <nav role="navigation" className="menu">

          <a href="#" className="logotype">
              LOGO
            <span>TYPE</span>
          </a>

          <div className="overflow-container">

            <ul className="menu-dropdown">

              <li>
                <a href="#">Dashboard</a>
                <span className="icon">
                  <FontAwesomeIcon
                    icon={faWarehouse}
                  />
                </span>
              </li>

              <li className="menu-hasdropdown">
                <a href="#">Settings</a>
                <span className="icon">
                  {' '}
                  <FontAwesomeIcon
                    icon={faDollarSign}
                  />

                </span>

                <label title="toggle menu" htmlFor="settings">
                  <span className="downarrow">

                    <FontAwesomeIcon
                      icon={faUpload}
                    />
                  </span>
                </label>
                <input type="checkbox" className="sub-menu-checkbox" id="settings" />

                <ul className="sub-menu-dropdown">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Security</a></li>
                  <li><a href="">Account</a></li>
                </ul>
              </li>

              <li>
                <a href="#">Favourites</a>
                <span className="icon">
                  {' '}
                  <FontAwesomeIcon
                    icon={faUpload}
                  />

                </span>
              </li>

              <li>
                <a href="#">Messages</a>
                <span className="icon">
                  {' '}
                  <FontAwesomeIcon
                    icon={faUpload}
                  />

                </span>
              </li>

            </ul>

          </div>

        </nav>

      </div>


    </>
  );
}
