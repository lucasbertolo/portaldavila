import React from 'react';
import PropertyInfo from './PropertyInfo';
import PropertyFeatures from './PropertyFeatures';
import PropertyDetails from './PropertyDetails';

import { db } from '../Helpers/ApiFetch';


// import { Button } from '../Common/FormComponents';
import PropertyPhotos from './PropertyPhotos';
import MultiStageProgress from '../Common/MultiStageProgress';

class PropertyManager extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sendStatus: '',
      details: {},
      info: {},
      features: {},
      images: [],
    };
  }


  componentDidMount() {
    const { message } = this.props;

    if (message) {
      this.setState({ sendStatus: message });
    }
  }

  handleSave = () => {
    this.setState((prevState) => ({
      ...prevState,
      saveData: !prevState.saveData,
    }));
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
    this.setState(() => ({
      [name]: data,
    }));
  }

  render() {
    const {
      sendStatus,
      info,
      details,
      features,
      images,
    } = this.state;
    const steps = [
      {
        name: 'Dados gerais',
        component: <PropertyInfo
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={info}
        />,
      },
      {
        name: 'Comodos',
        component: <PropertyDetails
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={details}
        />,
      },
      {
        name: 'Adicionais',
        component: <PropertyFeatures
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={features}
        />,
      },
      {
        name: 'Fotos',
        component: <PropertyPhotos
          handleComponent={this.handleComponent}
          data={this.props}
          initialState={images}
        />,
      },
    ];

    return (

      <form>
        <MultiStageProgress steps={steps} onSubmit={this.onSubmit} />
        {sendStatus}
      </form>

    );
  }
}


export default PropertyManager;
