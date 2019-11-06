/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './FilterBox.scss';
import { SearchIcon } from '../Common/Icons';

export default function FilterBox({ handleInput }) {
  const [state, setState] = useState({
    inputActive: false,
  });

  const handleSelect = () => {
    setState({ inputActive: true });
  };
  return (
    <aside>
      <div className="container-filter">
        <div className="toggle-button" />
        <div className="filter-box">
          <div className="filter" id="search">
            <input type="text" id="search-assignee" required="required" />
            <label htmlFor="search-assignee">SEARCH</label>
          </div>
        </div>
      </div>
      <div className="container-filter">

        <div className="toggle-button" />
        <div className="filter-box">
          Hello, I'm a menu!
        </div>
      </div>
    </aside>
  );
}
