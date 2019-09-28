/* eslint-disable react/button-has-type */
import React from 'react';
import fetch from 'isomorphic-fetch';

import ApiFetch from '../Helpers/ApiFetch';
import PropertyInfo from './PropertyInfo';


class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      neighborhood: props.neighborhood_id || '',
      type: props.type_id || '',
      price: props.price || '',
      purpose: props.purpose_id || '',
      sendStatus: '',
      isEditing: false,
    };
  }

  toggleEditing = () => {
    this.setState((prevState) => ({ isEditing: !prevState.isEditing }));
  }


  onSubmit = (e) => {
    e.preventDefault();

    const {
      price,
      type,
      neighborhood,
      purpose,
    } = this.state;

    const { op, id } = this.props;

    const request = op ? 'put' : 'post';

    const call = ApiFetch({
      area: 'property',
      query: id,
      request,
    });

    // Validar se campos estao preenchidos

    // this.setState({ sendStatus: 'Enviando ...' });

    fetch(call.url, {
      method: request,
      headers: call.headers,
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

        <PropertyInfo
          price={price}
          type={type}
          neighborhood={neighborhood}
          purpose={purpose}
          isEditing={isEditing}
          handleChange={this.handleChange}
          toggleEditing={this.toggleEditing}
        />


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


export default PropertyManager;
