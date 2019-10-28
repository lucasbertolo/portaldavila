/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faAdjust } from '@fortawesome/free-solid-svg-icons';

export default class Header extends React.Component {
//   componentDidMount() {
//     const { title } = this.props;
//     const spy = document.getElementById(`${title}`);
//     spy.style.textDecoration = 'line-through';
//   }

  shouldComponentUpdate() {
    return false;
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

  closeMenu = () => {
    const menu = document.getElementById('menu');
    const header = document.getElementById('header');
    const submenu = document.getElementById('submenu');
    menu.style.visibility = 'hidden';
    header.style.visibility = 'visible';
    if (submenu) {
      submenu.style.visibility = 'visible';
    }
  };

  render() {
    // const { title } = this.props;
    const listItems = ['property', 'about', 'contact', 'userarea'];
    return (
      <header id="header">
        <nav className="header-wrapper">
          <span className="header-logo">
            <span className="logo" />
            <h2>Remax/Portal</h2>
          </span>
          <span className="header-social">
            <ul>
              <li>
                <a
                  className="btn instagram"
                  href="https://www.instagram.com/lms_arquitetura/?hl=pt-br"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i title="instagram">
                    <FontAwesomeIcon icon={faAdjust} />
                  </i>
                </a>
              </li>
              <li>
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
            </ul>
          </span>
        </nav>

        <div className="menu" id="menu">
          <div className="menu-wrapper">
            <Link href="/">
              <section>
                <p>Home</p>
              </section>
            </Link>
            {
                listItems.map((item) => (
                  <div key={item}>
                    <Link href={`/${item}`}>
                      <section id={item}>
                        <p>{item}</p>
                      </section>
                    </Link>
                  </div>
                ))
            }

            <span
              className="close"
              onClick={this.closeMenu}
              role="presentation"
            >
              &times;
            </span>
          </div>
        </div>
      </header>
    );
  }
}
