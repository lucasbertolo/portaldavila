import React from 'react';

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
  values,
  classes,
  handleChange,
  options,
}) {
  const rangeMinMax = () => (
    <>
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Mínimo</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
          type="number"
        />
      </FormControl>
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Máximo</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange('amount')}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
          type="number"
        />
      </FormControl>
    </>
  );

  const rangeNumeric = (name) => (
    <>
      <FormControl className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">{name || ''}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          value={values.amount}
          onChange={handleChange(name)}
          labelWidth={60}
          type="number"
        />
      </FormControl>
    </>
  );

  const selectInput = (name, opt) => (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-native-simple">{name}</InputLabel>
      <Select
        native
        value={values[name]}
        onChange={handleChange(values[name])}
        inputProps={{
          name: 'age',
          id: 'age-native-simple',
        }}
      >
        {opt && opt.length > 0
          ? opt.map((x) => <option value={x}>{x}</option>)
          : null}
      </Select>
    </FormControl>
  );

  const checkboxInput = (opt) => (
    <>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          {opt && opt.length > 0
            ? opt.map((x) => (
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={x}
                    onChange={handleChange(x)}
                    value={x}
                  />
            )}
                label={x}
              />
            ))
            : null}
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
      dorm,
      garage,
      code,
      area,
    } = enums.filterOptions;

    if (
      mode === dorm
      || mode === garage
    ) {
      return rangeNumeric('Minimo');
    }

    if (mode === area) return rangeNumeric('Área m²');

    if (mode === code) return rangeNumeric('Código');

    if (mode === price) return rangeMinMax();

    if (mode === neighborhood) return selectInput('Bairro', options);

    if (mode === type) return selectInput('Tipo', options);

    if (mode === purpose) return checkboxInput(options);

    return null;
  };

  const content = handleContent();

  return <>{content}</>;
}
