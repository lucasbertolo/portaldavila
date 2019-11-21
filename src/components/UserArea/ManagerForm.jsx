/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Suspense } from 'react';

import PropertyInfo, { Info } from './PropertyInfo';
import PropertyFeatures, { Features } from './PropertyFeatures';
import PropertyDetails, { Details } from './PropertyDetails';
import PropertyPhotos from './PropertyPhotos';

import Toast from '../Helpers/Toast';

import db from '../Helpers/ApiFetch';

import './ManagerForm.scss';
import DeleteButton from './DeleteButton';

const getNavStyles = (indx, length) => {
  const styles = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push('done');
    } else if (i === indx) {
      styles.push('active');
    } else {
      styles.push('todo');
    }
  }
  return styles;
};

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showSaveBtn: false,
      showPreviousBtn: true,
      showNextBtn: true,
    };
  }
  if (indx === 0) {
    return {
      showSaveBtn: false,
      showPreviousBtn: false,
      showNextBtn: true,
    };
  }
  if (indx === length - 1) {
    return {
      showPreviousBtn: true,
      showSaveBtn: true,
    };
  }
  return {
    showSaveBtn: false,
    showPreviousBtn: true,
    showNextBtn: false,
  };
};

export default class ManagerForm extends React.Component {
  numberSteps = 5;

  errors = null;

  submitMyForm = null;

  constructor(props) {
    super(props);
    const dataInfo = new Info(this.props);
    const dataDetails = new Details(this.props);
    const dataFeature = new Features(this.props);

    this.state = {
      styles: getNavStyles(0, this.numberSteps),
      compIndex: 0,
      buttons: getButtonsState(0, this.numberSteps),
      images: [],
      info: dataInfo,
      details: dataDetails,
      features: dataFeature,
      toastOpen: false,
      toastMsg: '',
      saveState: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    if (id) {
      try {
        const resultPhotos = await db.get(`/property/photos/${id}`);
        this.setState({
          images: resultPhotos.data,
        });
      } catch (error) {
        this.setState({
          toastOpen: true,
          toastMsg:
            'Ops, tivemos um problema para carregar as fotos, tente novamente mais tarde',
        });
      }
    }
  }

  componentDidUpdate() {
    const { images, saveState } = this.state;

    if (images.length > 0 && !saveState) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        saveState: true,
      });
    }
  }

  handleComponent = (name, data) => {
    this.setState(() => ({
      [name]: data,
    }));
  };

  toastClose = () => {
    this.setState({
      toastOpen: false,
    });
  };

  handleNext = (e) => {
    const { compIndex } = this.state;
    this.submitMyForm(e)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          this.setStepState(compIndex + 1);
        } else {
          this.setState({
            toastOpen: true,
            toastMsg: 'Existem itens inválidos',
          });
        }
      })
      .catch((err) => this.setState({ toastOpen: true, toastMsg: `${err}` }));
  };

  handlePrevious = (e) => {
    const { compIndex } = this.state;

    this.submitMyForm(e)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          this.setStepState(compIndex > 0 ? compIndex - 1 : compIndex);
        } else {
          this.setState({
            toastOpen: true,
            toastMsg: 'Existem itens inválidos',
          });
        }
      })
      .catch((err) => this.setState({ toastOpen: true, toastMsg: `${err}` }));
  };

  handleOnClick = (evt) => {
    const { value } = evt.target;
    const { compIndex } = this.state;
    this.submitMyForm(evt)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          if (
            value === this.numberSteps - 1
            && compIndex === this.numberSteps - 1
          ) {
            this.setStepState(this.numberSteps);
          } else {
            this.setStepState(value);
          }
        } else {
          this.setState({
            toastOpen: true,
            toastMsg: 'Existem itens inválidos',
          });
        }
      })
      .catch((err) => this.setState({ toastOpen: true, toastMsg: `${err}` }));
  };

  bindSubmitForm = (submitForm) => {
    this.submitMyForm = submitForm;
  };

  bindErrors = (errors) => {
    this.errors = errors;
  };

  getSteps = () => {
    const {
      images, info, features, details,
    } = this.state;

    const HouseWrapper = React.lazy(() => import('../Description/HouseWrapper'));
    const steps = [
      {
        name: 'Dados gerais',
        component: (
          <PropertyInfo
            handleComponent={this.handleComponent}
            data={info}
            bindSubmitForm={this.bindSubmitForm}
            bindErrors={this.bindErrors}
          />
        ),
      },
      {
        name: 'Comodos',
        component: (
          <PropertyDetails
            handleComponent={this.handleComponent}
            data={details}
            bindSubmitForm={this.bindSubmitForm}
            bindErrors={this.bindErrors}
          />
        ),
      },
      {
        name: 'Adicionais',
        component: (
          <PropertyFeatures
            handleComponent={this.handleComponent}
            data={features}
            bindSubmitForm={this.bindSubmitForm}
            bindErrors={this.bindErrors}
          />
        ),
      },
      {
        name: 'Fotos',
        component: (
          <PropertyPhotos
            handleComponent={this.handleComponent}
            data={images}
            bindSubmitForm={this.bindSubmitForm}
            bindErrors={this.bindErrors}
          />
        ),
      },
      {
        name: 'Resumo',
        component: (
          <Suspense fallback={<div>Teste</div>}>
            <HouseWrapper
              info={info}
              details={details}
              features={features}
              images={images}
            />
          </Suspense>
        ),
      },
    ];

    return steps;
  };

  setStepState = (indx) => {
    const { compIndex } = this.state;
    this.setState({
      styles: getNavStyles(indx, this.numberSteps),
      compIndex: indx < this.numberSteps ? indx : compIndex,
      buttons: getButtonsState(indx, this.numberSteps),
    });
  };

  handleKeyDown = (evt) => (evt.which === 13 ? this.handleNext(this.numberSteps) : {});

  renderSteps = () => {
    const steps = this.getSteps();
    const { styles } = this.state;

    return steps.map((s, i) => (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li
        className={`progtrckr-${styles[i]}`}
        onClick={this.handleOnClick}
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        value={i}
      >
        <span>{steps[i].name}</span>
      </li>
    ));
  };

  sendData = (e) => {
    e.preventDefault();
    const {
      info, details, features, images,
    } = this.state;
    const { onSubmit } = this.props;

    const obj = {
      info,
      details,
      features,
      images,
    };

    if (!(images.length > 0)) {
      this.setState({
        saveState: false,
        toastOpen: true,
        toastMsg: 'É necessário adicionar ao menos uma foto',
      });

      return;
    }
    onSubmit(obj);
  };

  render() {
    const {
      compIndex, buttons, toastOpen, toastMsg, saveState,
    } = this.state;
    const { property_id } = this.props;
    const steps = this.getSteps();
    const progressBar = this.renderSteps();

    return (
      <div className="container-editor" onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr">{progressBar}</ol>
        {steps[compIndex].component}
        <div className="prog-button">
          <div className="next-container">
            <span
              className="prev-btn"
              style={buttons.showPreviousBtn ? {} : { display: 'none' }}
              onClick={this.handlePrevious}
              type="button"
            />
            <span
              className="next-btn"
              style={buttons.showNextBtn ? {} : { display: 'none' }}
              onClick={this.handleNext}
              type="button"
            />
          </div>

          <div className="save-container">
            <button
              style={buttons.showSaveBtn ? {} : { display: 'none' }}
              onClick={this.sendData}
              type="button"
              className="button-save button--save"
              disabled={!saveState}
            >
              <span role="img" aria-label="save-img">
                ☁️
              </span>
              Salvar
            </button>
          </div>
          <DeleteButton propertyId={property_id} />
          <Toast
            open={toastOpen}
            handleClose={this.toastClose}
            msg={toastMsg}
            status="error"
          />
        </div>
      </div>
    );
  }
}

ManagerForm.defaultProps = {
  showNavigation: true,
};
