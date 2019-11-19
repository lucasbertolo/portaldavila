/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer';

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
    // const listItems = ['sobre', 'Imóveis', 'Tranalhe conosco', 'userarea'];

    const listItems = [
      {
        page: 'about',
        label: 'Sobre',
      },
      {
        page: 'comingsoon',
        label: 'Trabalhe Conosco',
      },
      {
        page: 'team',
        label: 'Equipe',
      },
      {
        page: 'property',
        label: 'Imóveis',
      },
    ];
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
                  <div key={item.page}>
                    <Link href={`/${item.page}`}>
                      <section id={item.page}>
                        <p>{item.label}</p>
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
          <Footer />

        </div>

      </header>
    );
  }
}
