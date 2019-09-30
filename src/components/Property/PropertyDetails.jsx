import React, { useState } from 'react';

import { db } from '../Helpers/ApiFetch';
import { Input, Button } from '../Common/FormComponents';

function PropertyDetails() {
  const [state, setState] = useState({
    room: 0,
    dormitory: 0,
    garage: 0,
    bathroom: 0,
    visiting_room: 0,
    dining_room: 0,
    suite: 0,
    laundry: 0,
    washbasin: 0,
    kitchen: 0,
    gourmet_space: 0,
    office: 0,
    property_id: 2,
  });

  const onSubmit = (e) => {
    e.preventDefault();


    db.post('/details', {
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
      <Input
        hasLabel
        htmlFor="room"
        onChange={handleChange}
        label="Dormitórios"
        type="number"
        name="room"
        value={state.room}
        min="0"
        max="10"
        step="1"
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

export default PropertyDetails;
