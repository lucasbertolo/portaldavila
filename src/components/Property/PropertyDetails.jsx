/* eslint-disable max-classes-per-file */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/destructuring-assignment */
// import React, { useState, useEffect } from 'react';

// import { Input } from '../Common/FormComponents';

// function PropertyDetails(props) {
//   const [state, setState] = useState({
//     room: props.data.room || props.initialState.room || 0,
//     dormitory: props.data.dormitory || props.initialState.dormitory || 0,
//     garage: props.data.garage || props.initialState.garage || 0,
//     bathroom: props.data.bathroom || props.initialState.bathroom || 0,
//     visiting_room: props.data.visiting_room || props.initialState.visiting_room || 0,
//     dining_room: props.data.dining_room || props.initialState.dining_room || 0,
//     suite: props.data.suite || props.initialState.suite || 0,
//     laundry: props.data.laundry || props.initialState.laundry || 0,
//     washbasin: props.data.washbasin || props.initialState.washbasin || 0,
//     kitchen: props.data.kitchen || props.initialState.kitchen || 0,
//     gourmet_space: props.data.kitchen || props.initialState.kitchen || 0,
//     office: props.data.office || props.initialState.office || 0,
//   });

//   // Salva os novos valores de state e reenvia para o PropertyManager
//   const val = React.useRef();
//   useEffect(
//     () => {
//       val.current = state;
//     },
//     [state],
//   );
//   useEffect(
//     () => () => props.handleComponent('details', val.current),
//     [val],
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="form">
//       <div className="editor-row">
//         <Input
//           hasLabel
//           htmlFor="room"
//           onChange={handleChange}
//           label="Sala"
//           type="number"
//           name="room"
//           value={state.room}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="dormitory"
//           onChange={handleChange}
//           label="Dormitórios"
//           type="number"
//           name="dormitory"
//           value={state.dormitory}
//           min="0"
//           max="10"
//           step="1"
//         />
//         <Input
//           hasLabel
//           htmlFor="garage"
//           onChange={handleChange}
//           label="Garagem"
//           type="number"
//           name="garage"
//           value={state.garage}
//           min="0"
//           max="10"
//           step="1"
//         />
//       </div>
//       <div className="editor-row">
//         <Input
//           hasLabel
//           htmlFor="bathroom"
//           onChange={handleChange}
//           label="Banheiro"
//           type="number"
//           name="bathroom"
//           value={state.bathroom}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="visiting_room"
//           onChange={handleChange}
//           label="Sala de Visitas"
//           type="number"
//           name="visiting_room"
//           value={state.visiting_room}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="dining_room"
//           onChange={handleChange}
//           label="Sala de jantar"
//           type="number"
//           name="dining_room"
//           value={state.dining_room}
//           min="0"
//           max="10"
//           step="1"
//         />

//       </div>

//       <div className="editor-row">

//         <Input
//           hasLabel
//           htmlFor="suite"
//           onChange={handleChange}
//           label="Suíte"
//           type="number"
//           name="suite"
//           value={state.suite}
//           min="0"
//           max="10"
//           step="1"
//         />
//         <Input
//           hasLabel
//           htmlFor="laundry"
//           onChange={handleChange}
//           label="Lavanderia"
//           type="number"
//           name="laundry"
//           value={state.laundry}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="washbasin"
//           onChange={handleChange}
//           label="Lavabo"
//           type="number"
//           name="washbasin"
//           value={state.washbasin}
//           min="0"
//           max="10"
//           step="1"
//         />
//       </div>

//       <div className="editor-row">

//         <Input
//           hasLabel
//           htmlFor="kitchen"
//           onChange={handleChange}
//           label="Cozinha"
//           type="number"
//           name="kitchen"
//           value={state.kitchen}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="gourmet_space"
//           onChange={handleChange}
//           label="Área Gourmet"
//           type="number"
//           name="gourmet_space"
//           value={state.gourmet_space}
//           min="0"
//           max="10"
//           step="1"
//         />

//         <Input
//           hasLabel
//           htmlFor="office"
//           onChange={handleChange}
//           label="Escritório"
//           type="number"
//           name="office"
//           value={state.office}
//           min="0"
//           max="10"
//           step="1"
//         />

//       </div>

//     </div>
//   );
// }

// export default PropertyDetails;

import React from 'react';
import {
  Formik, Field, ErrorMessage,
} from 'formik';

const FormikForm = ({ bindSubmitForm, props, submitData }) => (

  <Formik
    initialValues={{
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
    }}
    onSubmit={(values) => {
      submitData('details', values);
    }}
  >
    {(formikProps) => {
      const {
        values, handleChange, handleBlur, handleSubmit,
      } = formikProps;

      bindSubmitForm(formikProps.submitForm);

      return (
        <form noValidate onSubmit={handleSubmit}>

          <Field type="number" name="room" value={values.room} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="room" component="div" />
          <Field type="number" name="dormitory" value={values.dormitory} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="dormitory" component="div" />
          <Field type="number" name="garage" value={values.garage} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="garage" component="div" />
          <Field type="number" name="bathroom" value={values.bathroom} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="bathroom" component="div" />
          <Field type="number" name="visiting_room" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="visiting_room" component="div" />
          <Field type="number" name="dining_room" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="dining_room" component="div" />
          <Field type="number" name="suite" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="suite" component="div" />
          <Field type="number" name="laundry" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="laundry" component="div" />
          <Field type="number" name="washbasin" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="washbasin" component="div" />
          <Field type="number" name="kitchen" value={values.a} onChange={handleChange} onBlur={handleBlur} />
          <ErrorMessage name="kitchen" component="div" />
        </form>
      );
    }}
  </Formik>
);

function PropertyDetails(props) {
  let submitMyForm = null;

  const handleSubmitMyForm = (e) => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = (submitForm) => {
    submitMyForm = submitForm;
  };

  return (
    <div>
      <button onClick={handleSubmitMyForm} type="button">Submit from outside</button>
      <FormikForm
        bindSubmitForm={bindSubmitForm}
        props={props}
        submitData={props.handleComponent}
      />
    </div>
  );
}

export default PropertyDetails;
