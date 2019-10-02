/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';


import { toCurrency } from '../Helpers/FormatFields';

const Label = (props) => {
  const {
    hasLabel,
    label,
    htmlFor,
  } = props;

  if (hasLabel === true) {
    return <label htmlFor={htmlFor}>{label}</label>;
  }

  return null;
};

const Button = (props) => {
  const {
    value,
    text,
    action,
  } = props;

  return (
    <fieldset>
      <button
        type="button"
        onClick={action}
        value={value || ''}
      >
        {text}
      </button>
    </fieldset>
  );
};

const Input = (props) => {
  const {
    htmlFor,
    label,
    name,
    required,
    hasLabel,
    max,
    min,
    placeholder,
    step,
    type,
    onChange,
    value,
    currency,
    onBlur,
    onFocus,
  } = props;

  return (
    <fieldset>
      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />

      <input
        id={htmlFor}
        max={max || null}
        min={min || null}
        name={name || null}
        placeholder={placeholder || null}
        required={required || null}
        step={step || null}
        type={type || 'text'}
        onChange={onChange}
        onBlur={onBlur || null}
        onFocus={onFocus || null}
        value={currency ? toCurrency(value) : value || ''}
      />
    </fieldset>
  );
};

const Radio = (props) => {
  const {
    htmlFor,
    label,
    name,
    required,
    value,
    onChange,
    state,
  } = props;

  return (
    <fieldset>
      <label
        htmlFor={htmlFor}
        label={label}
      >
        <input
          id={htmlFor}
          name={name || null}
          required={required || null}
          type="radio"
          value={value || ''}
          checked={state}
          onChange={onChange}
        />
        {label}
      </label>
    </fieldset>
  );
};


const Select = (props) => {
  const {
    hasLabel,
    htmlFor,
    label,
    name,
    required,
    options,
    onChange,
    value,
    noIndex,
  } = props;


  const selectOptionsList = options.map((option, index) => (
    <option
      // eslint-disable-next-line react/no-array-index-key
      key={option + index}
      value={noIndex ? index : index + 1}
    >
      {option}
    </option>
  ));

  return (
    <fieldset>
      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />

      <select
        id={htmlFor}
        name={name || null}
        required={required || null}
        onChange={onChange}
        value={value}
      >
        <option value="" disabled>Escolha uma opção</option>

        {selectOptionsList}
      </select>
    </fieldset>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const TextArea = (props) => {
  const {
    hasLabel,
    htmlFor,
    label,
    cols,
    name,
    required,
    rows,
    value,
    placeholder,
    onChange,
  } = props;

  return (
    <fieldset>
      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />

      <textarea
        placeholder={placeholder}
        onChange={onChange}
        cols={cols || null}
        id={htmlFor}
        name={name || null}
        required={required || null}
        rows={rows || null}
        value={value}
      />

    </fieldset>
  );
};


export {
  Radio,
  Select,
  Label,
  Input,
  Button,
  TextArea,
};