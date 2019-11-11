/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  Formik, ErrorMessage,
} from 'formik';

import TextField from '@material-ui/core/TextField';
import { ValidationDetails } from '../Helpers/Validation';

import './PropertyDetails.scss';

export default function PropertyDetails(props) {
  const initialValues = {
    ...props.data,
  };
  const { bindSubmitForm, bindErrors } = props;

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

        bindErrors(formikProps.errors);
        bindSubmitForm(formikProps.submitForm);

        return (

          <form className="details-group" noValidate onSubmit={handleSubmit}>
            {
              Object.keys(initialValues).map((item) => (
                <div
                  key={item}
                  className="input-details"
                >
                  <TextField
                    value={values[item]}
                    label={item}
                    id={item}
                    type="number"
                    name={item}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    margin="normal"
                    variant="outlined"
                  />
                  <ErrorMessage className="error-message" component="span" name={item} />
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
  this.dormitory = data.dormitory || 0;
  this.garage = data.garage || 0;
  this.bathroom = data.bathroom || 0;
  this.living_room = data.living_room || 0;
  this.dining_room = data.dining_room || 0;
  this.suite = data.suite || 0;
  this.laundry = data.laundry || 0;
  this.washbasin = data.washbasin || 0;
  this.kitchen = data.kitchen || 0;
  this.gourmet_space = data.gourmet_space || 0;
  this.office = data.office || 0;


  return (
    this.dormitory,
    this.garage,
    this.bathroom,
    this.living_room,
    this.dining_room,
    this.suite,
    this.laundry,
    this.washbasin,
    this.kitchen,
    this.gourmet_space,
    this.office
  );
}
