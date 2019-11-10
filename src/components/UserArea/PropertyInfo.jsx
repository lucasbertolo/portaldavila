/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import React, { useState, useEffect } from 'react';

import {
  Formik, Field,
} from 'formik';

import { ValidationInfo } from '../Helpers/Validation';

import {
  Select, Input,
} from '../Common/FormComponents';

import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';


export default function PropertyInfo(props) {
  const [state, setState] = useState({
    isEditing: false,
    neighborhoodList: [],
    typeList: [],
  });

  // Para lidar com campo preço que tem placeholder personalizado
  const toggleEditing = () => {
    setState((prevState) => ({
      ...prevState,
      isEditing: !prevState.isEditing,
    }));
  };

  // Chamadas para listas de bairros e tipos
  useEffect(() => {
    const fetchBlock = async () => {
      try {
        const resultBlock = await db.get('/neighborhood');
        const options = resultBlock.data.map((item) => item.name);

        setState((prevState) => ({
          ...prevState,
          neighborhoodList: options,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    const fetchType = async () => {
      try {
        const resultType = await db.get('/typeofproperty');
        const options = resultType.data.map((item) => item.type);

        setState((prevState) => ({
          ...prevState,
          typeList: options,
        }));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchBlock();
    fetchType();
  }, []);

  // Valores iniciais dos atributos
  const initialValues = {
    ...props.data,
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ValidationInfo}
      onSubmit={(values, { setSubmitting }) => {
        if (values.renting && values.selling) {
          values.purpose_id = enums.purposeOfProperty.both;
        } else if (values.selling) {
          values.purpose_id = enums.purposeOfProperty.selling;
        } else if (values.renting) {
          values.purpose_id = enums.purposeOfProperty.renting;
        }
        values.position = {
          lat: values.lat,
          long: values.long,
        };
        props.handleComponent('info', values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors, touched,
        } = formikProps;

        const { bindSubmitForm, bindErrors } = props;
        bindSubmitForm(formikProps.submitForm);
        bindErrors(formikProps.errors);

        return (

          <form className="form-style-5" noValidate onSubmit={handleSubmit}>

            <Select
              hasLabel
              htmlFor="neighborhood-list"
              label="Bairro"
              options={state.neighborhoodList}
              onChange={handleChange}
              name="neighborhood_id"
              onBlur={handleBlur}
              value={values.neighborhood_id}
            />

            <Select
              hasLabel
              htmlFor="property-type"
              label="Tipo de imóvel"
              options={state.typeList}
              onChange={handleChange}
              name="type_id"
              value={values.type_id}
            />

            <div>
              <label className="container-checkbox" htmlFor="renting">
                Renting
                <input
                  type="checkbox"
                  checked={values.renting ? 'checked' : ''}
                  id="renting"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="checkmark" />
              </label>

              <label className="container-checkbox" htmlFor="selling">
                Selling
                <input
                  type="checkbox"
                  id="selling"
                  checked={values.selling ? 'checked' : ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span className="checkmark" />
              </label>

              {errors.purpose_id && touched.purpose_id ? (
                <div>{errors.purpose_id}</div>
              ) : null}
            </div>

            {
              state.isEditing
                ? (
                  <div className="group">
                    <Input
                      hasLabel
                      htmlFor="price"
                      onChange={handleChange}
                      label="Preço"
                      required
                      type="number"
                      name="price"
                      value={values.price}
                      onBlur={toggleEditing}
                      className="styled-input"
                    />
                  </div>

                )
                : (
                  <div className="group">
                    <Input
                      hasLabel
                      htmlFor="price"
                      onChange={handleChange}
                      label="Preço"
                      required
                      type="text"
                      name="price"
                      value={values.price}
                      onFocus={toggleEditing}
                      currency
                      className="styled-input"
                    />
                    <span className="highlight" />
                    <span className="bar" />
                  </div>
                )
            }

            <div className="group">
              <Field
                type="number"
                name="area"
                value={values.area}
                onChange={handleChange}
                onBlur={handleBlur}
                className="styled-input"
              />
              <span className="highlight" />
              <span className="bar" />
              <label htmlFor="area" className="styled-label">
                {'Area m²'}
              </label>
              {errors.area && touched.area ? (
                <div>{errors.area}</div>
              ) : null}
            </div>

            <div className="group">
              <Field
                type="number"
                name="building_area"
                value={values.building_area}
                onChange={handleChange}
                onBlur={handleBlur}
                className="styled-input"
              />
              <span className="highlight" />
              <span className="bar" />
              <label htmlFor="building_area" className="styled-label">
                {'Area construída - m²'}
              </label>

              {errors.building_area && touched.building_area ? (
                <div>{errors.building_area}</div>
              ) : null}
            </div>

            {/* MAPS POSITION
              <div>
                <label htmlFor="lat">
                  {'Latitude'}
                </label>
                <Field
                  type="text"
                  name="lat"
                  value={values.position.lat}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lat && touched.lat ? (
                  <div>{errors.lat}</div>
                ) : null}
              </div>

              <div>
                <label htmlFor="long">
                  {'Longitude'}
                </label>
                <Field
                  type="text"
                  name="long"
                  value={values.position.long}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.long && touched.long ? (
                  <div>{errors.long}</div>
                ) : null}
              </div> */}
          </form>
        );
      }}
    </Formik>

  );
}

function Info(data) {
  this.neighborhood_id = data.neighborhood_id || 0;
  this.position = data.position ? JSON.stringify(data.position) : null;
  this.price = data.price || 0;
  this.purpose_id = Number(data.purpose_id) || '';
  this.type_id = data.type_id || 0;
  this.area = data.area || 0;
  this.building_area = data.building_area || 0;
  this.selling = false;
  this.renting = false;
  this.exchange = false;
  this.building_loan = false;
  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area,
    this.selling,
    this.renting,
    this.exchange,
    this.building_loan
  );
}

export {
  Info,
};
