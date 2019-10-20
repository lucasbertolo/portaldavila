/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Formik, Field, ErrorMessage,
} from 'formik';

import { ValidationDetails } from '../Helpers/Validation';

export default function PropertyDetails(props) {
  const initialValues = {
    ...props.data,
  };
  const { bindSubmitForm } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationDetails}
      onSubmit={(values, { setSubmitting }) => {
        props.handleComponent('details', values);
        setSubmitting(false);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit,
        } = formikProps;

        bindSubmitForm(formikProps.submitForm);

        return (

          <form className="form-style-5" noValidate onSubmit={handleSubmit}>
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
                  <ErrorMessage component="span" name={item} />
                </div>
              ))
            }
          </form>
        );
      }}
    </Formik>
  );
}

export function Details(data) {
  this.room = data.room || 0;
  this.dormitory = data.dormitory || 0;
  this.garage = data.garage || 0;
  this.bathroom = data.bathroom || 0;
  this.visiting_room = data.visiting_room || 0;
  this.dining_room = data.dining_room || 0;
  this.suite = data.suite || 0;
  this.laundry = data.laundry || 0;
  this.washbasin = data.washbasin || 0;
  this.kitchen = data.kitchen || 0;
  this.gourmet_space = data.gourmet_space || 0;
  this.office = data.office || 0;


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
