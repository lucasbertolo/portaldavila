/* eslint-disable react/destructuring-assignment */

import React, { useEffect } from 'react';
import {
  Formik, Field,
} from 'formik';

import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  dormitory: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  dining_room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  garage: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  bathroom: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  visiting_room: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  suite: Yup.number()
    .min(0, 'Too Short!')
    .max(10, 'Too Long!'),
  laundry: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  washbasin: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  kitchen: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  office: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
  gourmet_space: Yup.number()
    .min(0, 'Too Short!')
    .max(5, 'Too Long!'),
});

export default function PropertyDetails(props) {
  const initialValues = {
    room: props.data.room || props.initialState.room || 0,
    dormitory: props.data.dormitory || props.initialState.dormitory || 0,
    garage: props.data.garage || props.initialState.garage || 0,
    bathroom: props.data.bathroom || props.initialState.bathroom || 0,
    visiting_room: props.data.visiting_room || props.initialState.visiting_room || 0,
    dining_room: props.data.dining_room || props.initialState.dining_room || 0,
    suite: props.data.suite || props.initialState.suite || 0,
    laundry: props.data.laundry || props.initialState.laundry || 0,
    washbasin: props.data.washbasin || props.initialState.washbasin || 0,
    kitchen: props.data.kitchen || props.initialState.kitchen || 0,
    gourmet_space: props.data.kitchen || props.initialState.kitchen || 0,
    office: props.data.office || props.initialState.office || 0,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        props.handleComponent('details', values);
      }}
    >
      {(formikProps) => {
        const {
          values, handleChange, handleBlur, handleSubmit, errors, touched,
        } = formikProps;

        return (
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
                  />
                  {errors[item] && touched[item] ? (
                    <div>{errors[item]}</div>
                  ) : null}
                </div>
              ))
            }
          </form>
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
