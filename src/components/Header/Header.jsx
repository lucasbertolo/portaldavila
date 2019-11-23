/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AvatarDropdown from './AvatarDropdown';
import Menu from './Menu';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  openDropdown = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeDropdown = () => {
    this.setState({ anchorEl: null });
  };

  signOff = () => {
    const { logOut } = this.props;
    this.setState({
      anchorEl: null,
    });

    logOut();
  }

  openMenu = () => {
    const menu = document.getElementById('menu');
    const header = document.getElementById('header');
    const submenu = document.getElementById('submenu');
    menu.style.visibility = 'visible';
    header.style.visibility = 'hidden';
    if (submenu) {
      submenu.style.visibility = 'hidden';
    }
  };

  render() {
    const { anchorEl } = this.state;
    const {
      nonVisibleHeader, isLogged, user, openModalLogin, openModalUser,
    } = this.props;
    const letter = user && user.username ? user.username.charAt(0).toUpperCase() : '';

    return !nonVisibleHeader ? (
      <header id="header">
        <nav className="header-wrapper">
          <span className="header-logo">
            <span className="logo" />
            <h2>Remax/Portal</h2>
          </span>
          <span className="header-social">
            <ul>
              <li className="menu-bars">
                <a
                  className="btn bars"
                  onClick={this.openMenu}
                  role="presentation"
                >
                  <i title="menu">
                    <FontAwesomeIcon icon={faBars} />
                  </i>
                </a>
              </li>
              <li>
                <div className="header-login-container">
                  {isLogged ? (
                    <div id="avatar-container">
                      <span
                        role="presentation"
                        className="avatarBtn smGlobalBtn"
                        onClick={this.openDropdown}
                      >
                        {letter}
                      </span>
                    </div>
                  ) : (
                    <div
                      className="login"
                      onClick={openModalLogin}
                      role="presentation"
                    >
                      Login
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </span>
        </nav>
        <Menu />
        <AvatarDropdown
          logOut={this.signOff}
          anchorEl={anchorEl}
          openModalUser={openModalUser}
          handleClick={this.openDropdown}
          handleClose={this.closeDropdown}
        />
      </header>
    ) : null;
  }
}
