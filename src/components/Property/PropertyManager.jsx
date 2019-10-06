import React from 'react';

import PropertyInfo from './PropertyInfo';
import PropertyFeatures from './PropertyFeatures';
import PropertyDetails from './PropertyDetails';

import { db } from '../Helpers/ApiFetch';

import { Button } from '../Common/FormComponents';
import PropertyPhotos from './PropertyPhotos';

class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sendStatus: '',
      details: {},
      info: {},
      features: {},
      images: {},
      index: 0,
    };
  }


  componentDidMount() {
    const { message } = this.props;

    if (message) {
      this.setState({ sendStatus: message });
    }
  }


  onSubmit = (e) => {
    e.preventDefault();

    const {
      details,
      info,
      features,
      images,
    } = this.state;

    const { id } = this.props;
    const method = id ? 'put' : 'post';

    const data = {
      info,
      details,
      features,
      images,
    };

    const url = id
      ? `/property/${id}`
      : '/property';

    db[method](url, {
      data,
      // creator_id: 1,
    })
      .then((message) => {
        if (message.status === 200) { this.setState({ sendStatus: 'Cadastrado com sucesso' }); }
      })
      .catch(() => this.setState({ sendStatus: 'Erro ao cadastrar' }));
  }

  handleComponent = (name, data) => {
    this.setState((prevState) => ({
      [name]: data,
      index: prevState.index + 1,
    }));
  }


  render() {
    const {
      sendStatus,
      index,
    } = this.state;

    const container = [
      <PropertyInfo handleComponent={this.handleComponent} data={this.props} />,
      <PropertyFeatures handleComponent={this.handleComponent} data={this.props} />,
      <PropertyDetails handleComponent={this.handleComponent} data={this.props} />,
      <PropertyPhotos handleComponent={this.handleComponent} data={this.props} />,
    ];

    return (
      <div>
        <form>
          {container[index]}
          <Button action={this.onSubmit} text="Enviar dados" />
          {sendStatus}
        </form>
      </div>

    );
  }
}


export default PropertyManager;
