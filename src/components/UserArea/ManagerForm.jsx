/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

import { toast } from 'react-toastify';

import PropertyInfo, { Info } from './PropertyInfo';
import PropertyFeatures, { Features } from './PropertyFeatures';
import PropertyDetails, { Details } from './PropertyDetails';
import PropertyPhotos from './PropertyPhotos';
import HouseWrapper from '../Description/HouseWrapper';

import { db } from '../Helpers/ApiFetch';

import './ManagerForm.scss';


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
  } if (indx === 0) {
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
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const resultPhotos = await db.get(`/property/photos/${id}`);

      this.setState({
        images: resultPhotos.data,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }

  handleComponent = (name, data) => {
    this.setState(() => ({
      [name]: data,
    }));
  };

  handleNext = (e) => {
    const { compIndex } = this.state;
    this.submitMyForm(e)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          this.setStepState(compIndex + 1);
        } else {
          toast('Existem campos inválidos', {
            type: toast.TYPE.ERROR,
            autoClose: 5000,
          });
        }
      })
      .catch((err) => toast.error(err));
  };

  handlePrevious = (e) => {
    const { compIndex } = this.state;

    this.submitMyForm(e)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          this.setStepState((compIndex > 0) ? compIndex - 1 : compIndex);
        } else {
          toast('Existem campos inválidos', {
            type: toast.TYPE.ERROR,
            autoClose: 5000,
          });
        }
      })
      .catch((err) => toast.error(err));
  }

  handleOnClick = (evt) => {
    const { value } = evt.target;
    this.submitMyForm(evt)
      .then(() => {
        if (Object.entries(this.errors).length === 0) {
          if (value === this.numberSteps - 1
          && this.state.compIndex === this.numberSteps - 1) {
            this.setStepState(this.numberSteps);
          } else {
            this.setStepState(value);
          }
        } else {
          toast('Existem campos inválidos', {
            type: toast.TYPE.ERROR,
            autoClose: 5000,
          });
        }
      })
      .catch((err) => toast.error(err));
  };

  bindSubmitForm = (submitForm) => {
    this.submitMyForm = submitForm;
  };

  bindErrors = (errors) => {
    this.errors = errors;
  }

  getSteps = () => {
    const {
      images, info, features, details,
    } = this.state;

    const steps = [
      {
        name: 'Dados gerais',
        component: <PropertyInfo
          handleComponent={this.handleComponent}
          data={info}
          bindSubmitForm={this.bindSubmitForm}
          bindErrors={this.bindErrors}
        />,
      },
      {
        name: 'Comodos',
        component: <PropertyDetails
          handleComponent={this.handleComponent}
          data={details}
          bindSubmitForm={this.bindSubmitForm}
          bindErrors={this.bindErrors}
        />,
      },
      {
        name: 'Adicionais',
        component: <PropertyFeatures
          handleComponent={this.handleComponent}
          data={features}
          bindSubmitForm={this.bindSubmitForm}
          bindErrors={this.bindErrors}
        />,
      },
      {
        name: 'Fotos',
        component: <PropertyPhotos
          handleComponent={this.handleComponent}
          data={images}
          bindSubmitForm={this.bindSubmitForm}
          bindErrors={this.bindErrors}
        />,
      },
      {
        name: 'Resumo',
        component: <HouseWrapper
          info={info}
          details={details}
          features={features}
          images={images}
        />,
      },
    ];

    return steps;
  }


  setStepState = (indx) => {
    const { compIndex } = this.state;
    this.setState({
      styles: getNavStyles(indx, this.numberSteps),
      compIndex: indx < this.numberSteps ? indx : compIndex,
      buttons: getButtonsState(indx, this.numberSteps),
    });
  }

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

    const obj = {
      info,
      details,
      features,
      images,
    };

    this.props.onSubmit(obj);
  }

  render() {
    const { compIndex, buttons } = this.state;
    const steps = this.getSteps();
    const progressBar = this.renderSteps();

    return (
      <div className="container-editor" onKeyDown={this.handleKeyDown}>
        <ol className="progtrckr">
          {progressBar}
        </ol>
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
            >
              <span role="img" aria-label="save-img">☁️</span>
              Salvar
            </button>
          </div>

        </div>
      </div>
    );
  }
}


ManagerForm.defaultProps = {
  showNavigation: true,
};
