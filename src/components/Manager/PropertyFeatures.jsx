/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { Formik } from 'formik';
import { Select, TextArea } from '../Common/FormComponents';

import { ValidationFeatures } from '../Helpers/Validation';
import Effect from '../Helpers/Effect';

export default function PropertyFeatures(props) {
  const initialValues = {
    ...props.data,
  };

  const standardOption = ['Não', 'Sim'];
  const selectArray = Object.keys(initialValues).filter((item) => (
    item !== 'description'
  ));

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationFeatures}
      onSubmit={(values) => {
        props.handleComponent('features', values);
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
              <TextArea
                hasLabel
                htmlFor="description"
                label="Descrição"
                name="description"
                onChange={handleChange}
                rows={2}
                value={values.description}
                placeholder="Descreva o imóvel"
              />
              {errors.description ? (
                <div>{errors.description}</div>
              ) : null}

              {
                selectArray.map((item) => (
                  <Select
                    key={item}
                    hasLabel
                    htmlFor={item}
                    label={item}
                    options={standardOption}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={item}
                    value={values[item]}
                    noIndex
                  />
                ))
              }
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export function Features(data, id) {
  this.description = data.description;
  this.air_conditioning = data.air_conditioning || 0;
  this.pool = data.pool || 0;
  this.balcony = data.balcony || 0;
  this.barbecue_grill = data.barbecue_grill || 0;
  this.stairway = data.stairway || 0;
  this.garden = data.garden || 0;
  this.property_id = id || 0;

  return (
    this.description,
    this.air_conditioning,
    this.pool,
    this.balcony,
    this.barbecue_grill,
    this.stairway,
    this.garden,
    this.property_id
  );
}
