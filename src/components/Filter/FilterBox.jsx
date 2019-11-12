/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import FilterOption from './FilterOption';
import Tags from './Tags';

import { SearchIcon } from '../Common/Icons';
import enums from '../../content/enums';
import { ValidationFilter } from '../Helpers/Validation';

import './FilterBox.scss';

export default function FilterBox({ selectList, setFieldList }) {
  const [boxFilter, setFilter] = useState(false);
  const [tag, setTag] = useState({});

  const [state, setState] = useState({
    priceMin: 0,
    priceMax: 0,
    code: 0,
    type: 0,
    neighborhood: 0,
    purpose: 0,
    dormitory: 0,
    garage: 0,
    area: 0,
    renting: false,
    selling: false,
  });

  const validList = () => {
    const listItems = { ...state };
    const items = ValidationFilter(listItems);

    setFieldList(items);
    setTag(items);
  };

  const handleInput = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const clearField = (e) => {
    if (e === 'price') {
      setState((prevState) => ({
        ...prevState,
        priceMin: 0,
        priceMax: 0,
      }));
    }
    setState((prevState) => ({
      ...prevState,
      [e]: 0,
    }));
  };

  const handleMenu = () => {
    setFilter(!boxFilter);
  };

  useEffect(() => {
    validList();
  }, [state]);

  const options = [
    {
      name: 'Preço',
      mode: enums.filterOptions.price,
    },
    {
      name: 'Bairro',
      mode: enums.filterOptions.neighborhood,
      options: selectList.neighborhoodList,
    },
    {
      name: 'Tipo',
      mode: enums.filterOptions.type,
      options: selectList.typeList,
    },
    {
      name: 'Proposito',
      mode: enums.filterOptions.purpose,
      options: ['Venda', 'Locação'],
    },
    {
      name: 'Vagas',
      mode: enums.filterOptions.garage,
    },
    {
      name: 'Quartos',
      mode: enums.filterOptions.dormitory,
    },
    {
      name: 'Metragem',
      mode: enums.filterOptions.area,
    },
    {
      name: 'Código',
      mode: enums.filterOptions.code,
    },
  ];
  return (
    <aside className={boxFilter ? 'open-menu' : ''}>
      <Tags tag={tag} clearField={clearField} />

      <ul id="menu-filter">
        <li>
          {options.map((x) => (
            <FilterOption
              name={x.name}
              mode={x.mode}
              handleInput={handleInput}
              state={state}
              options={x.options || null}
            />
          ))}
        </li>
      </ul>
      <button type="button" id="toggle" onClick={handleMenu}>
        <span className="icon-bar">
          <SearchIcon />
        </span>
      </button>
    </aside>
  );
}
