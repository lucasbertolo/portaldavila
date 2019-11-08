/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import FilterOption from './FilterOption';
import Tags from './Tags';

import { SearchIcon } from '../Common/Icons';
import enums from '../../content/enums';

import './FilterBox.scss';

export default function FilterBox({ selectList }) {
  const [boxFilter, setFilter] = useState(false);

  const [state, setState] = useState({
    priceMin: 0,
    priceMax: 0,
    code: 0,
    type: 0,
    neighborhood: 0,
    purpose: 0,
    dorm: 0,
    garage: 0,
    area: 0,
    renting: false,
    selling: false,
  });

  const handleInput = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelect = (e) => {
    const { id } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleMenu = () => {
    setFilter(!boxFilter);
  };

  return (
    <aside className={boxFilter ? 'open-menu' : ''}>
      <Tags state={state} />

      <ul id="menu-filter">
        <li className="current">
          <FilterOption
            name="Preço"
            mode={enums.filterOptions.price}
            handleInput={handleInput}
            state={state}
          />
        </li>
        <li>
          <FilterOption
            name="Bairro"
            mode={enums.filterOptions.neighborhood}
            options={selectList.neighborhoodList}
            handleSelect={handleSelect}
            state={state}
          />
        </li>
        <li>
          <FilterOption
            name="Tipo"
            mode={enums.filterOptions.type}
            options={selectList.typeList}
            state={state}
            handleSelect={handleSelect}
          />
        </li>
        <li>
          <FilterOption
            name="Proposito"
            mode={enums.filterOptions.purpose}
            handleSelect={handleSelect}
            state={state}
            options={['Venda', 'Locação']}
          />
        </li>
        <li>
          <FilterOption
            name="Vagas"
            handleInput={handleInput}
            state={state}
            mode={enums.filterOptions.garage}
          />
        </li>
        <li>
          <FilterOption
            name="Quartos"
            handleInput={handleInput}
            state={state}
            mode={enums.filterOptions.dorm}
          />
        </li>
        <li>
          <FilterOption
            name="Metragem"
            handleInput={handleInput}
            state={state}
            mode={enums.filterOptions.area}
          />
        </li>
        <li>
          <FilterOption
            name="Código"
            handleInput={handleInput}
            state={state}
            mode={enums.filterOptions.code}
          />
        </li>
      </ul>
      <a href="#menu-filter" id="toggle" onClick={handleMenu}>
        <span className="icon-bar"><SearchIcon /></span>
      </a>
    </aside>
  );
}
