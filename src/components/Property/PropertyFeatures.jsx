import React, { useState } from 'react';

import { db } from '../Helpers/ApiFetch';
import { Select, Input, Button } from '../Common/FormComponents';

function PropertyFeatures() {
  const [state, setState] = useState({
    description: '',
    air_conditioning: false,
    pool: false,
    balcony: false,
    barbecue_grill: false,
    stairway: false,
    garden: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();


    db.post('/features', {
      state,
    })
      .then((message) => {
        if (message.status === 200) { console.log(message); }
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Select
        hasLabel
        htmlFor="air-conditioning"
        label="Ar condicionado"
        options="Sim, Não"
        onChange={handleChange}
        name="neighborhood"
        value={state.air_conditioning}
      />

      <Input
        hasLabel
        htmlFor="dormitory"
        onChange={handleChange}
        label="Dormitórios"
        type="number"
        name="dormitory"
        value={state.dormitory}
        min="0"
        max="10"
        step="1"
      />
      <Input
        hasLabel
        htmlFor="garage"
        onChange={handleChange}
        label="Garagem"
        type="number"
        name="garage"
        value={state.garage}
        min="0"
        max="10"
        step="1"
      />

      <Button text="Seguinte" action={onSubmit} />

    </div>
  );
}

export default PropertyFeatures;
