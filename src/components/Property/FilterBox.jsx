/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import FilterOption from './FilterOption';

import { SearchIcon } from '../Common/Icons';
import enums from '../../content/enums';

import './FilterBox.scss';

export default function FilterBox({ selectList }) {
  const [boxFilter, setFilter] = useState(false);

  const handleMenu = () => {
    setFilter(!boxFilter);
  };

  return (
    <aside className={boxFilter ? 'open-menu' : ''}>
      <ul id="menu">
        <li className="current">
          <FilterOption
            name="Preço"
            mode={enums.filterOptions.price}
          />
        </li>
        <li>
          <FilterOption
            name="Bairro"
            mode={enums.filterOptions.neighborhood}
            options={selectList.neighborhoodList}
          />
        </li>
        <li>
          <FilterOption
            name="Tipo"
            mode={enums.filterOptions.type}
            options={selectList.typeList}
          />
        </li>
        <li>
          <FilterOption
            name="Proposito"
            mode={enums.filterOptions.purpose}
            options={['Venda', 'Locação']}
          />
        </li>
        <li>
          <FilterOption
            name="Vagas"
            mode={enums.filterOptions.garage}
          />
        </li>
        <li>
          <FilterOption
            name="Quartos"
            mode={enums.filterOptions.dorm}
          />
        </li>
        <li>
          <FilterOption
            name="Metragem"
            mode={enums.filterOptions.area}
          />
        </li>
        <li>
          <FilterOption
            name="Código"
            mode={enums.filterOptions.code}
          />
        </li>
      </ul>
      <a href="#menu" id="toggle" onClick={handleMenu}>
        <span className="icon-bar"><SearchIcon /></span>
      </a>
    </aside>
  );
}
