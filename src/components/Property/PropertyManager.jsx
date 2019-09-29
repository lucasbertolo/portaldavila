import React from 'react';

import PropertyInfo from './PropertyInfo';

import { db } from '../Helpers/ApiFetch';

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


  componentDidMount() {
    const { message } = this.props;
    if (message) {
      this.setState({ sendStatus: message });
    }
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

    const { id } = this.props;
    const method = id ? 'put' : 'post';

    const url = id
      ? `/property/${id}`
      : '/property';


    db[method](url, {
      neighborhood_id: Number(neighborhood),
      type_id: Number(type),
      purpose_id: purpose,
      price,
      creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) { this.setState({ sendStatus: 'Cadastrado com sucesso' }); }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao cadastrar' }));
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
