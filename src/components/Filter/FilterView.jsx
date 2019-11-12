import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import enums from '../../content/enums';

export default function FilterView({
  mode,
  classes,
  options,
  state,
  handleInput,
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
            name={nameMin}
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
            name={nameMax}
            onChange={handleMax}
            onBlur={handleInput}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
            type="number"
            error={min > max}
          />
        </FormControl>
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
            name={name}
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
      <InputLabel id={name}>{label}</InputLabel>
      <Select
        labelId={name}
        id={name}
        name={name}
        value={Number(state[name])}
        onChange={handleInput}
      >
        <MenuItem value={0}>Escolha uma opção</MenuItem>

        {opt && opt.length > 0
          ? opt.map((x, i) => (
            <MenuItem key={x} value={Number(i)}>{x}</MenuItem>
          ))
          : null}
      </Select>
    </FormControl>
  );

  const radioInput = () => (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup
          aria-label="purpose"
          id="purpose"
          name="purpose"
          value={Number(state.purpose)}
          onChange={handleInput}
        >
          <FormControlLabel value={enums.purposeOfProperty.renting} control={<Radio />} label="Locação" />
          <FormControlLabel value={enums.purposeOfProperty.selling} control={<Radio />} label="Venda" />
        </RadioGroup>
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

    if (mode === purpose) return radioInput();

    return null;
  };

  const content = handleContent();

  return <>{content}</>;
}
