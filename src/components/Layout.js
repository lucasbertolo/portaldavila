import React from 'react';
import '../assets/scss/main.scss';

const Layout = (props) => (
  <div className='layout'>
    {props.children}
  </div>
);

export default Layout; 