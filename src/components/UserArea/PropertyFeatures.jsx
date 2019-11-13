/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

import { ValidationFeatures } from '../Helpers/Validation';
import WrapperTooltip from '../Common/WrapperTooltip';

import {
  AirConditionerIcon,
  PoolIcon,
  BalconyIcon,
  HydrantIcon,
  CameraIcon,
  GrillIcon,
  GardenIcon,
  LadderIcon,
} from '../Common/Icons';

import './PropertyFeatures.scss';

export default function PropertyFeatures(props) {
  const initialValues = {
    ...props.data,
  };

  const { bindSubmitForm, bindErrors } = props;

  const [state, setState] = useState(initialValues);

  const handleIcon = (e) => {
    const { id } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationFeatures}
      onSubmit={(values, { setSubmitting }) => {
        props.handleComponent('features', state);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const { handleSubmit, errors } = formikProps;

        bindSubmitForm(formikProps.submitForm);
        bindErrors(formikProps.errors);

        return (
          <form className="features-group" noValidate onSubmit={handleSubmit}>
            <TextField
              placeholder="Descreva o imóvel"
              multiline
              rows={2}
              label="Descrição"
              rowsMax={4}
              value={state.description}
              onChange={handleChange}
              name="description"
            />
            {errors.description ? <div>{errors.description}</div> : null}

            <div className="features-opt">
              <WrapperTooltip title="Ar condicionado" position="left">
                <i
                  className={
                    state.airConditioner ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="airConditioner"
                    name="airConditioner"
                    value={state.airConditioner}
                  />
                  <AirConditionerIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Piscina" position="top">
                <i
                  className={state.pool ? 'icon-editor active' : 'icon-editor'}
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="pool"
                    name="pool"
                    value={state.pool}
                  />
                  <PoolIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Sacada" position="top">
                <i
                  className={
                    state.balcony ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="balcony"
                    name="balcony"
                    value={state.balcony}
                  />
                  <BalconyIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Extintor" position="right">
                <i
                  className={
                    state.fireSecurity ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="fireSecurity"
                    name="fireSecurity"
                    value={state.fireSecurity}
                  />
                  <HydrantIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Sistema de segurança" position="left">
                <i
                  className={
                    state.cameraSecurity ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="cameraSecurity"
                    name="cameraSecurity"
                    value={state.cameraSecurity}
                  />
                  <CameraIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Churrasqueira" position="bottom">
                <i
                  className={
                    state.barbecueGrill ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="barbecueGrill"
                    name="barbecueGrill"
                    value={state.barbecueGrill}
                  />
                  <GrillIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Jardim" position="bottom">
                <i
                  className={
                    state.garden ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="garden"
                    name="garden"
                    value={state.garden}
                  />
                  <GardenIcon />
                </i>
              </WrapperTooltip>

              <WrapperTooltip title="Escadas" position="right">
                <i
                  className={
                    state.stairway ? 'icon-editor active' : 'icon-editor'
                  }
                >
                  <span
                    onClick={handleIcon}
                    role="presentation"
                    id="stairway"
                    name="stairway"
                    value={state.stairway}
                  />
                  <LadderIcon />
                </i>
              </WrapperTooltip>
            </div>
          </form>
        );
      }}
    </Formik>
  );
}

export function Features(data, id) {
  this.description = data.description || '';
  this.airConditioner = data.air_conditioning || false;
  this.pool = data.pool || false;
  this.balcony = data.balcony || false;
  this.barbecueGrill = data.barbecue_grill || false;
  this.stairway = data.stairway || false;
  this.garden = data.garden || false;
  this.fireSecurity = data.fire_security || false;
  this.cameraSecurity = data.camera_security || false;
  this.property_id = id || false;

  return (
    this.description,
    this.airConditioner,
    this.pool,
    this.balcony,
    this.barbecueGrill,
    this.stairway,
    this.garden,
    this.fireSecurity,
    this.cameraSecurity,
    this.property_id
  );
}
