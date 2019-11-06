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
      <span>
        <div className="select-wrapper">
          <select onChange={handleSelect} className="select">
            <option value="value1">Tipo</option>
            <option value="value1">Venda</option>
            <option value="value2">Banana</option>
            <option value="value3">Cherries</option>
          </select>
        </div>
      </span>
      {
          state.inputActive ? (
            <div className="filter" id="search">
              <input type="text" id="search-assignee" required="required" />
              <label htmlFor="search-assignee">{}</label>
              <i><SearchIcon /></i>
            </div>
          ) : null
        }
    </aside>
  );
}
