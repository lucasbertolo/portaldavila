import React from 'react';

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
        value={value || null}
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
          value={value}
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
  } = props;

  let arrayOptions;
  let selectOptionsList = [];

  if (options) {
    arrayOptions = options.map((item) => item.name || item.type);

    // eslint-disable-next-line max-len
    selectOptionsList = arrayOptions.map((option, index) => <option key={option} value={index}>{option}</option>);
  }


  return (
    <fieldset>
      <Label
        hasLabel={hasLabel}
        htmlFor={htmlFor}
        label={label}
      />

      <select
        defaultValue=""
        id={htmlFor}
        name={name || null}
        required={required || null}
        onChange={onChange}
      >
        <option value="" disabled>Escolha uma opção</option>

        {selectOptionsList}
      </select>
    </fieldset>
  );
};


export {
  Radio,
  Select,
  Label,
  Input,
};
