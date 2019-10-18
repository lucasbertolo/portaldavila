/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  Formik, Field,
} from 'formik';

import { ValidationDetails } from '../Helpers/Validation';
import Effect from '../Helpers/Effect';


export default function PropertyDetails(props) {
  const initialValues = {
    ...props.data,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationDetails}
      onSubmit={(values) => {
        props.handleComponent('details', values);
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

              {
              Object.keys(initialValues).map((item) => (
                <div key={item}>
                  <label htmlFor={item}>
                    {item}
                  </label>
                  <Field
                    type="number"
                    name={item}
                    value={values[item]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="number"
                  />
                  {errors[item] && touched[item] ? (
                    <div>{errors[item]}</div>
                  ) : null}
                </div>
              ))
            }
            </form>
          </div>
        );
      }}
    </Formik>
  );
}

export function Details(data) {
  this.room = data.room;
  this.dormitory = data.dormitory;
  this.garage = data.garage;
  this.bathroom = data.bathroom;
  this.visiting_room = data.visiting_room;
  this.dining_room = data.dining_room;
  this.suite = data.suite;
  this.laundry = data.laundry;
  this.washbasin = data.washbasin;
  this.kitchen = data.kitchen;
  this.gourmet_space = data.gourmet_space;
  this.office = data.office;


  return (
    this.room,
    this.dormitory,
    this.garage,
    this.bathroom,
    this.visiting_room,
    this.dining_room,
    this.suite,
    this.laundry,
    this.washbasin,
    this.kitchen,
    this.gourmet_space,
    this.office
  );
}
