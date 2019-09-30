/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';

import { Select, Input, Radio } from '../Common/FormComponents';


function PropertyInfo(props) {
  const {
    neighborhood,
    handleChange,
    type,
    toggleEditing,
    price,
    purpose,
    isEditing,
    area,
    building,
  } = props;

  const [neighborhoodList, setNeigborhoodList] = useState(['']);
  const [typeList, setTypeList] = useState(['']);


  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const resultBlock = await db.get('/neighborhood');
        setNeigborhoodList(resultBlock.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchType = async () => {
      try {
        const resultType = await db.get('/typeproperty');
        setTypeList(resultType.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlock();
    fetchType();
  }, []);

  return (
    <div>
      <Select
        hasLabel
        htmlFor="neighborhood-list"
        label="Bairro"
        options={neighborhoodList}
        onChange={handleChange}
        name="neighborhood"
        value={neighborhood}
      />

      <Select
        hasLabel
        htmlFor="property-type"
        label="Tipo de imóvel"
        options={typeList}
        onChange={handleChange}
        name="type"
        value={type}
      />

      <Radio
        hasLabel
        htmlFor="radioOne"
        label="Locação"
        name="purpose"
        onChange={handleChange}
        value={enums.purposeOfProperty.renting}
        state={purpose === enums.purposeOfProperty.renting ? 'checked' : null}
        required
      />

      <Radio
        hasLabel
        htmlFor="radioTwo"
        label="Venda"
        onChange={handleChange}
        value={enums.purposeOfProperty.selling}
        name="purpose"
        state={purpose === enums.purposeOfProperty.selling ? 'checked' : null}
        required
      />

      {
          isEditing
            ? (
              <Input
                hasLabel
                htmlFor="price"
                onChange={handleChange}
                label="Preço"
                required
                type="number"
                name="price"
                value={price}
                onBlur={toggleEditing}
              />
            )
            : (
              <Input
                hasLabel
                htmlFor="price"
                onChange={handleChange}
                label="Preço"
                required
                type="text"
                name="price"
                value={price}
                onFocus={toggleEditing}
                currency
              />
            )

      }

      <Input
        hasLabel
        htmlFor="area"
        onChange={handleChange}
        label="Área"
        required
        type="number"
        name="area"
        value={area}
        min="0"
        max="1000000000"
        step="10"
      />

      <Input
        hasLabel
        htmlFor="building"
        onChange={handleChange}
        label="Área Construída"
        required
        type="number"
        name="building"
        value={building}
        min="0"
        max="100000000"
        step="10"
      />
    </div>

  );
}

export default PropertyInfo;
