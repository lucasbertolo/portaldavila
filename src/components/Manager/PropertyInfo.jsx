/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';

import {
  Formik, Field,
} from 'formik';

import { ValidationInfo } from '../Helpers/Validation';
import Effect from '../Helpers/Effect';

import {
  Select, RadioButtonGroup, Radio, Input,
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
      validationSchema={ValidationInfo}
      onSubmit={(values) => {
        // eslint-disable-next-line no-param-reassign
        values.position = {
          lat: values.lat,
          long: values.long,
        };

        props.handleComponent('info', values);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors, touched,
        } = formikProps;

        return (
          <div className="form-style-5">

            <form noValidate onSubmit={handleSubmit}>

              {/* Envia valores para Manager ao desmontar o componente */ }
              <Effect
                formik={formikProps}
              />

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

              <RadioButtonGroup
                id="purpose_id"
                value={values.purpose_id || ''}
                error={errors.purpose_id}
                touched={touched.purpose_id}
              >
                <Radio
                  hasLabel
                  htmlFor="radioTwo"
                  label="Venda"
                  onChange={handleChange}
                  value={enums.purposeOfProperty.selling}
                  name="purpose_id"
                  state={values.purpose_id === enums.purposeOfProperty.selling ? 'checked' : null}
                  required
                />

                <Radio
                  hasLabel
                  htmlFor="radioTwo"
                  label="Locação"
                  onChange={handleChange}
                  value={enums.purposeOfProperty.renting}
                  name="purpose_id"
                  state={values.purpose_id === enums.purposeOfProperty.renting ? 'checked' : null}
                  required
                />

                {errors.purpose_id && touched.purpose_id ? (
                  <div>{errors.purpose_id}</div>
                ) : null}

              </RadioButtonGroup>

              {
              state.isEditing
                ? (
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
                  />
                )
                : (
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
                  />
                )

            }

              <div>
                <label htmlFor="area">
                  {'Area m²'}
                </label>
                <Field
                  type="number"
                  name="area"
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.area && touched.area ? (
                  <div>{errors.area}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="building_area">
                  {'Area construída - m²'}
                </label>
                <Field
                  type="number"
                  name="building_area"
                  value={values.building_area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
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
          </div>

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

  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area
  );
}

export {
  Info,
};
