import React from 'react';

import { Input } from '../Common/FormComponents';

export default function FilterBox({ state, handleInput }) {
  return (
    <div>
      <Input
        hasLabel
        htmlFor="code"
        name="code"
        label="Codigo"
        placeholder="Filtrar por codigo"
        onChange={handleInput}
        value={state.code}
        type="search"
      />

      <Input
        hasLabel
        htmlFor="price"
        name="price"
        label="Preço"
        placeholder="Filtrar por preço"
        onChange={handleInput}
        value={state.price}
        type="number"
      />
    </div>
  );
}
