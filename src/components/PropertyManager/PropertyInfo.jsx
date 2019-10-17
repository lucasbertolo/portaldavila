/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';

import {
  Formik, Field,
} from 'formik';
import {
  Select, RadioButtonGroup, Radio, Input,
} from '../Common/FormComponents';

import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';


const SignupSchema = Yup.object().shape({
  area: Yup.number()
    .min(0)
    .required('Valor requerido'),
  building_area: Yup.number()
    .lessThan(Yup.ref('area'), 'Área construída deve ser menor que a área total'),
});

function PropertyInfo(props) {
  const [state, setState] = useState({
    isEditing: false,
    neighborhoodList: props.initialState.neighborhoodList || [],
    typeList: props.initialState.typeList || [],
  });


  const toggleEditing = () => {
    setState((prevState) => ({
      ...prevState,
      isEditing: !prevState.isEditing,
    }));
  };

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

  const initialValues = {
    neighborhood_id: props.initialState.neighborhood_id || props.data.neighborhood_id || '',
    type_id: props.initialState.type_id || props.data.type_id || '',
    price: props.initialState.price || props.data.price || '',
    position: props.data.position ? JSON.parse(props.data.position) : {},
    purpose_id: Number(props.initialState.purpose_id) || props.data.purpose_id || '',
    area: props.initialState.area || props.data.area || 0,
    building_area: props.initialState.building_area || props.data.building_area || 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
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
                value={values.purpose_id}
                error={errors.purpose_id}
                touched={touched.purpose_id}
              >
                <Radio
                  hasLabel
                  htmlFor="radioTwo"
                  label="Venda"
                  onChange={handleChange}
                  value={enums.purposeOfProperty.selling || ''}
                  name="purpose_id"
                  state={values.purpose_id === enums.purposeOfProperty.selling ? 'checked' : null}
                  required
                />

                <Radio
                  hasLabel
                  htmlFor="radioTwo"
                  label="Locação"
                  onChange={handleChange}
                  value={enums.purposeOfProperty.renting || ''}
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

              {/* MAPS POSITION */}
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
              </div>

            </form>
          </div>

        );
      }}
    </Formik>

  );
}

function Effect(props) {
  const effect = () => {
    props.formik.submitForm();
  };

  useEffect(
    () => () => effect(),
    [],
  );
  return null;
}

export default PropertyInfo;
