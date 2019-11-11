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
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
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

  useEffect(() => {
    validList();
  }, [state]);

  return (
    <aside className={boxFilter ? 'open-menu' : ''}>
      <Tags tag={tag} clearField={clearField} />

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
            mode={enums.filterOptions.dormitory}
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
      <button type="button" id="toggle" onClick={handleMenu}>
        <span className="icon-bar"><SearchIcon /></span>
      </button>
    </aside>
  );
}
