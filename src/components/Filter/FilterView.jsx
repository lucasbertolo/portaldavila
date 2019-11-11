import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import enums from '../../content/enums';

export default function FilterView({
  mode,
  classes,
  options,
  state,
  handleInput,
  handleSelect,
}) {
  const rangeMinMax = (nameMin, nameMax) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);

    const handleMin = (e) => {
      setMin(Number(e.target.value));
    };

    const handleMax = (e) => {
      setMax(Number(e.target.value));
    };

    return (
      <>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Min</InputLabel>
          <OutlinedInput
            id={nameMin}
            value={min}
            onChange={handleMin}
            onBlur={handleInput}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
            error={min > max}
          />
        </FormControl>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Max</InputLabel>
          <OutlinedInput
            id={nameMax}
            value={max}
            onChange={handleMax}
            onBlur={handleInput}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
            error={min > max}
          />
        </FormControl>
        <span>teste</span>
      </>
    );
  };

  const rangeNumeric = (name, label) => {
    const [value, setValue] = useState(0);

    const handleValue = (e) => {
      setValue(Number(e.target.value));
    };

    return (
      <>
        <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            {label || ''}
          </InputLabel>
          <OutlinedInput
            id={name}
            value={value}
            onChange={handleValue}
            onBlur={handleInput}
            labelWidth={60}
            type="number"
          />
        </FormControl>
      </>
    );
  };

  const selectInput = (name, label, opt) => (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        native
        value={state[name]}
        onChange={handleInput}
        inputProps={{
          name,
          id: name,
        }}
      >
        {opt && opt.length > 0
          ? opt.map((x, i) => (
            <option key={x} value={i + 1}>
              {x}
            </option>
          ))
          : null}
      </Select>
    </FormControl>
  );

  const checkboxInput = () => (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={(
              <Checkbox
                id="renting"
                checked={state.renting}
                onChange={handleSelect}
                value={state.renting}
              />
            )}
            label="Locação"
          />

          <FormControlLabel
            control={(
              <Checkbox
                id="selling"
                checked={state.selling}
                onChange={handleSelect}
                value={state.selling}
              />
            )}
            label="Venda"
          />
        </FormGroup>
      </FormControl>
    </>
  );

  const handleContent = () => {
    const {
      price,
      neighborhood,
      type,
      purpose,
      dormitory,
      garage,
      code,
      area,
    } = enums.filterOptions;

    if (mode === dormitory) return rangeNumeric('dormitory', 'Minimo');

    if (mode === garage) return rangeNumeric('garage', 'Minimo');

    if (mode === area) return rangeNumeric('area', 'Área m²');

    if (mode === code) return rangeNumeric('code', 'Código');

    if (mode === price) return rangeMinMax('priceMin', 'priceMax');

    if (mode === neighborhood) return selectInput('neighborhood', 'Bairro', options);

    if (mode === type) return selectInput('type', 'Tipo', options);

    if (mode === purpose) return checkboxInput();

    return null;
  };

  const content = handleContent();

  return <>{content}</>;
}
