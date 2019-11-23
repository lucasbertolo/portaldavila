import React from 'react';
import Link from 'next/link';
import Footer from '../Footer/Footer';

const listItems = [
  {
    page: 'about',
    label: 'Sobre',
  },
  {
    page: 'team',
    label: 'Equipe',
  },
  {
    page: 'property',
    label: 'Imóveis',
  },
  {
    page: 'userarea',
    label: 'Área do usuário',
  },
];

const closeMenu = () => {
  const menu = document.getElementById('menu');
  const header = document.getElementById('header');
  const submenu = document.getElementById('submenu');
  menu.style.visibility = 'hidden';
  header.style.visibility = 'visible';
  if (submenu) {
    submenu.style.visibility = 'visible';
  }
};

const Menu = () => (
  <div className="menu" id="menu">
    <div className="menu-wrapper">
      <Link href="/">
        <section>
          <p>Home</p>
        </section>
      </Link>
      {listItems.map((item) => (
        <div key={item.page}>
          <Link href={`/${item.page}`}>
            <section id={item.page}>
              <p>{item.label}</p>
            </section>
          </Link>
        </div>
      ))}

      <span className="close" onClick={closeMenu} role="presentation">
        &times;
      </span>
    </div>
    <Footer />
  </div>
);

export default Menu;
