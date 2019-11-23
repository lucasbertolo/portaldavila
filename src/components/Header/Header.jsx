/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import AvatarDropdown from './AvatarDropdown';
import Menu from './Menu';

import ModalLogin from '../Login/ModalLogin';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user || {},
      open: false,
      anchorEl: null,
    };
  }

  openDropdown = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  closeDropdown = () => {
    this.setState({ anchorEl: null });
  };

  openModalLogin = () => {
    this.setState({
      open: true,
    });
  };

  register = (user) => {
    const { handleRegister } = this.props;

    return handleRegister(user)
      .then((res) => {
        if (res.success) {
          this.setState({ open: false });
          return res;
        }
        return res;
      })
      .catch((res) => res);
  }

  login = (user) => {
    const { handleLogin } = this.props;

    return handleLogin(user)
      .then((res) => {
        if (res.success) {
          this.setState({ open: false });
          return res;
        }
        return res;
      })
      .catch((res) => res);
  }

  closeModalLogin = () => {
    this.setState({
      open: false,
    });
  };

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
    const { user, anchorEl, open } = this.state;
    const {
      logOut, nonVisibleHeader, isLogged,
    } = this.props;
    return (
      !nonVisibleHeader ? (
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
                    {
                      isLogged ? (
                        <div id="avatar-container">
                          <span
                            role="presentation"
                            className="avatarBtn smGlobalBtn"
                            onClick={this.openDropdown}
                          >
                            {user.username}
                          </span>
                        </div>
                      ) : (
                        <div
                          className="login"
                          onClick={this.openModalLogin}
                          role="presentation"
                        >
                        Login
                        </div>
                      )
                    }
                  </div>
                </li>
              </ul>
            </span>
          </nav>
          <Menu />
          <AvatarDropdown
            logOut={logOut}
            anchorEl={anchorEl}
            handleClick={this.openDropdown}
            handleClose={this.closeDropdown}
          />
          <ModalLogin
            open={open}
            classes="login-modal"
            handleLogin={this.login}
            handleRegister={this.register}
            handleClose={this.closeModalLogin}
          />
        </header>
      ) : null
    );
  }
}
