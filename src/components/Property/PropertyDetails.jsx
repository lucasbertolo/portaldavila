/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

import { Input, Button } from '../Common/FormComponents';

function PropertyDetails(props) {
  const [state, setState] = useState({
    room: props.data.room || 0,
    dormitory: props.data.dormitory || 0,
    garage: props.data.garage || 0,
    bathroom: props.data.bathroom || 0,
    visiting_room: props.data.visiting_room || 0,
    dining_room: props.data.dining_room || 0,
    suite: props.data.suite || 0,
    laundry: props.data.laundry || 0,
    washbasin: props.data.washbasin || 0,
    kitchen: props.data.kitchen || 0,
    gourmet_space: props.data.kitchen || 0,
    office: props.data.office || 0,
  });

  const ForwardData = (e) => {
    e.preventDefault();

    props.handleComponent('details', state);
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

      <Button text="Seguinte" action={ForwardData} />

    </div>
  );
}

export default PropertyDetails;
