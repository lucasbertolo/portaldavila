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
    return <label htmlFor={htmlFor} className="styled-label">{label}</label>;
  }

  return null;
};

const Button = (props) => {
  const {
    value,
    text,
    action,
    className,
    disabled,
  } = props;

  return (
    <>
      <button
        className={className || null}
        type="button"
        onClick={action}
        value={value || ''}
        disabled={disabled}
      >
        {text}
      </button>
    </>
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
    className,
  } = props;

  return (
    <>
      <input
        className={className || null}
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

      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />
    </>
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
    onBlur,
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
        onBlur={onBlur}
      >
        <option value="0" disabled>Escolha uma opção</option>

        {selectOptionsList}
      </select>
    </fieldset>
  );
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


// Radio group
const RadioButtonGroup = ({
  error,
  touched,
  label,
  children,
}) => (
  <div>
    <fieldset>
      <legend>{label}</legend>
      <div className="container-radio">
        {children}
      </div>

      {touched && error}
    </fieldset>
  </div>
);

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

  console.log(state);
  console.log(value);
  return (
    <>
      <label
        htmlFor={htmlFor}
        label={label}
        className="container-radio"
      >
        {label}
        <input
          id={htmlFor}
          name={name || null}
          required={required || null}
          type="radio"
          value={value || ''}
          checked={state}
          onChange={onChange}
        />
        <span className="checkmark" />

      </label>
    </>
  );
};


export {
  Radio,
  Select,
  Label,
  Input,
  Button,
  TextArea,
  RadioButtonGroup,
};

// Validações
Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
