import React, { useState, useEffect } from 'react';

import axios from 'axios';
import enums from '../../content/enums';

import { Select, Input, Radio } from '../Helpers/FormComponents';


function PropertyInfo(props) {
  const {
    neighborhood,
    handleChange,
    type,
    toggleEditing,
    price,
    purpose,
    isEditing,
  } = props;

  const [neighborhoodList, setNeigborhoodList] = useState(['']);
  const [typeList, setTypeList] = useState(['']);


  useEffect(() => {
    const fetchBlock = async () => {
      const resultBlock = await axios(
        'http://localhost:8000/neighborhood',
      );
      setNeigborhoodList(resultBlock.data);
    };

    const fetchType = async () => {
      const resultType = await axios(
        'http://localhost:8000/typeproperty',
      );
      setTypeList(resultType.data);
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
    </div>

  );
}

export default PropertyInfo;
