/* eslint-disable react/button-has-type */
import React from 'react';
import fetch from 'isomorphic-fetch';

import enums from '../../enums';

class PropertyManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      neighborhood: [],
      type: [],
      purpose: '',
      sendStatus: '',
    };
  }

  componentDidMount() {
    this.getNeighborhoodList();
    this.getTypeList();
  }

  getNeighborhoodList = async () => {
    const result = await fetch('http://localhost:8000/neighborhood')
      .then((res) => res.json())
      .then((list) => {
        if (list) {
          this.setState({ neighborhood: list });
        }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao encontrar lista de bairros' }));

    return result;
  }

  getTypeList = async () => {
    const result = await fetch('http://localhost:8000/typeproperty')
      .then((res) => res.json())
      .then((list) => {
        if (list) {
          this.setState({ type: list });
        }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao encontrar lista de tipos' }));

    return result;
  }


  onSubmit = () => {
    const selectBlock = document.getElementById('neighborhood-list').value;
    const selectType = document.getElementById('property-type').value;
    const purpose = document.querySelector('input[name="purpose"]:checked').value;
    const price = document.getElementById('price').value;

    // Validar se campos estao preenchidos

    this.setState({ sendStatus: 'Enviando ...' });

    fetch('http://localhost:8000/property/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        neighborhood_id: Number(selectBlock) + 1,
        type_id: Number(selectType) + 1,
        purpose_id: purpose,
        price,
        creator_id: 1,
      }),
    })
      .then((response) => response.json())
      .then((message) => {
        if (message) {
          this.setState({
            sendStatus: 'Enviada com sucesso',
          });
        }
      })
      .catch(() => {
        this.setState({
          sendStatus: 'Algo deu errado, tente novamente mais tarde',
        });
      });
  }


  render() {
    const {
      neighborhood,
      type,
      sendStatus,
    } = this.state;

    return (
      <form>
        <h2>Inserir Propriedade</h2>


        <Select
          hasLabel
          htmlFor="neighborhood-list"
          label="Bairro"
          options={neighborhood}
          getInputValue={this.getInputValue}
        />

        <Select
          hasLabel
          htmlFor="property-type"
          label="Tipo de imóvel"
          options={type}
        />

        {/*
        <Checkbox
          hasLabel
          htmlFor="checkbox"
          label="Checkbox"
          required
        /> */}

        <Radio
          hasLabel
          htmlFor="radioOne"
          label="Locação"
          name="purpose"
          value={enums.purposeOfProperty.renting}
          required
        />

        <Radio
          hasLabel
          htmlFor="radioTwo"
          label="Venda"
          value={enums.purposeOfProperty.selling}
          name="purpose"
          required
        />

        <Input
          hasLabel
          htmlFor="price"
          label="Preço"
          required
          type="number"
          min="0"
          max="10000000000"
          step="500"
        />

        <fieldset>
          <button
            type={type || 'button'}
            onClick={this.onSubmit}
          >
            Cadastrar
          </button>
        </fieldset>
        {sendStatus}

      </form>
    );
  }
}


// const Checkbox = (props) => {
//   const {
//     htmlFor,
//     label,
//     name,
//     required,
//   } = props;

//   return (
//     <fieldset>
//       <label
//         htmlFor={htmlFor}
//         label={label}
//       >
//         <input
//           id={htmlFor}
//           name={name || null}
//           required={required || null}
//           type="checkbox"
//         />
//         {label}
//       </label>
//     </fieldset>
//   );
// };

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
  } = props;

  const arrayOptions = options.map((item) => item.name || item.type);

  // eslint-disable-next-line max-len
  const selectOptionsList = arrayOptions.map((option, index) => <option key={option} value={index}>{option}</option>);

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
      >
        <option value="" disabled>Escolha uma opção</option>

        {selectOptionsList}
      </select>
    </fieldset>
  );
};


export default PropertyManagement;
