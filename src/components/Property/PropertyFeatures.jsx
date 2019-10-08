/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

import { Select, TextArea, Button } from '../Common/FormComponents';

function PropertyFeatures(props) {
  const [state, setState] = useState({
    description: props.data.description || props.initialState.description || '',
    air_conditioning: props.data.air_conditioning || props.initialState.air_conditioning || 0,
    pool: props.data.pool || props.initialState.pool || 0,
    balcony: props.data.balcony || props.initialState.balcony || 0,
    barbecue_grill: props.data.barbecue_grill || props.initialState.barbecue_grill || 0,
    stairway: props.data.stairway || props.initialState.stairway || 0,
    garden: props.data.garden || props.initialState.garden || 0,
  });

  const ForwardData = (e) => {
    e.preventDefault();

    props.handleComponent('features', state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const standardOption = ['Não', 'Sim'];

  return (
    <div className="form">
      <TextArea
        hasLabel
        htmlFor="description"
        label="Descrição"
        name="description"
        onChange={handleChange}
        rows={2}
        value={state.description}
        placeholder="Descreva o imóvel"
      />

      <Select
        hasLabel
        htmlFor="air_conditioning"
        label="Ar condicionado"
        options={standardOption}
        onChange={handleChange}
        name="air_conditioning"
        value={state.air_conditioning}
        noIndex
      />

      <Select
        hasLabel
        htmlFor="pool"
        label="Piscina"
        options={standardOption}
        onChange={handleChange}
        name="pool"
        value={state.pool}
        noIndex
      />

      <Select
        hasLabel
        htmlFor="balcony"
        label="Sacada"
        options={standardOption}
        onChange={handleChange}
        name="balcony"
        value={state.balcony}
        noIndex
      />

      <Select
        hasLabel
        htmlFor="barbecue_grill"
        label="Churrasqueira"
        options={standardOption}
        onChange={handleChange}
        name="barbecue_grill"
        value={state.barbecue_grill}
        noIndex
      />

      <Select
        hasLabel
        htmlFor="stairway"
        label="Escada"
        options={standardOption}
        onChange={handleChange}
        name="stairway"
        value={state.stairway}
        noIndex
      />

      <Select
        hasLabel
        htmlFor="garden"
        label="Jardim"
        options={standardOption}
        onChange={handleChange}
        name="garden"
        value={state.garden}
        noIndex
      />


      <Button text="Salvar" action={ForwardData} className="editor-save-button" />

    </div>
  );
}

export default PropertyFeatures;
