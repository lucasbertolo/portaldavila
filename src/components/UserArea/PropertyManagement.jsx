/* eslint-disable react/button-has-type */
import React from 'react';
import fetch from 'isomorphic-fetch';

import { Select, Input, Radio } from '../Helpers/FormComponents';

import enums from '../../enums';

class PropertyManagement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      neighborhoodList: [],
      typeList: [],
      neighborhood: props.neighborhood_id || '',
      type: props.type_id || '',
      price: props.price || '',
      purpose: props.purpose_id || '',
      sendStatus: '',
      isEditing: false,
    };
  }

  componentDidMount() {
    this.getNeighborhoodList();
    this.getTypeList();
  }

  toggleEditing = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  }

  getNeighborhoodList = async () => {
    const result = await fetch('http://localhost:8000/neighborhood')
      .then((res) => res.json())
      .then((list) => {
        if (list) {
          this.setState({ neighborhoodList: list });
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
          this.setState({ typeList: list });
        }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao encontrar lista de tipos' }));

    return result;
  }


  onSubmit = (e) => {
    e.preventDefault();

    const {
      price,
      type,
      neighborhood,
      purpose,
    } = this.state;

    // Validar se campos estao preenchidos

    this.setState({ sendStatus: 'Enviando ...' });

    fetch('http://localhost:8000/property/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        neighborhood_id: Number(neighborhood) + 1,
        type_id: Number(type) + 1,
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

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }


  render() {
    const {
      neighborhoodList,
      typeList,
      sendStatus,
      price,
      type,
      neighborhood,
      purpose,
      isEditing,
    } = this.state;

    return (
      <form>
        <h2>Inserir Propriedade</h2>

        {
          neighborhoodList.length > 0
            ? (
              <Select
                hasLabel
                htmlFor="neighborhood-list"
                label="Bairro"
                options={neighborhoodList}
                onChange={this.handleChange}
                name="neighborhood"
                value={neighborhood}
              />
            )
            : null
        }

        {
          typeList.length > 0
            ? (
              <Select
                hasLabel
                htmlFor="property-type"
                label="Tipo de imóvel"
                options={typeList}
                onChange={this.handleChange}
                name="type"
                value={type}
              />
            ) : null
        }


        <Radio
          hasLabel
          htmlFor="radioOne"
          label="Locação"
          name="purpose"
          onChange={this.handleChange}
          value={enums.purposeOfProperty.renting}
          state={purpose === enums.purposeOfProperty.renting ? 'checked' : null}
          required
        />

        <Radio
          hasLabel
          htmlFor="radioTwo"
          label="Venda"
          onChange={this.handleChange}
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
                onChange={this.handleChange}
                label="Preço"
                required
                type="number"
                name="price"
                value={price}
                onBlur={this.toggleEditing}
              />
            )
            : (
              <Input
                hasLabel
                htmlFor="price"
                onChange={this.handleChange}
                label="Preço"
                required
                type="text"
                name="price"
                value={price}
                onFocus={this.toggleEditing}
                currency
              />
            )

      }


        <fieldset>
          <button
            type="button"
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


export default PropertyManagement;
