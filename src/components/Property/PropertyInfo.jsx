/* eslint-disable react/destructuring-assignment */
/* eslint-disable camelcase */

import React, { useState, useEffect } from 'react';

import * as Yup from 'yup';

import {
  Formik, Field,
} from 'formik';
import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';

import {
  Select, Input, Radio,
} from '../Common/FormComponents';

const SignupSchema = Yup.object().shape({
  area: Yup.number()
    .min(0, 'Too Short!')
    .max(20000, 'Too Long!'),
});
function PropertyInfo(props) {
  const initialValues = {
    neighborhood_id: props.initialState.neighborhood_id || props.data.neighborhood_id || '',
    type_id: props.initialState.type_id || props.data.type_id || '',
    price: props.initialState.price || props.data.price || '',
    purpose_id: Number(props.initialState.purpose_id) || props.data.purpose_id || '',
    area: props.initialState.area || props.data.area || 0,
    building_area: props.initialState.building_area || props.data.building_area || 0,
  };

  const [state, setState] = useState({
    isEditing: false,
    neighborhoodList: props.initialState.neighborhoodList || [],
    typeList: props.initialState.typeList || [],
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setState((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };


  const toggleEditing = () => {
    setState((prevState) => ({
      ...prevState,
      isEditing: !prevState.isEditing,
    }));
  };


  useEffect(() => {
    if (Object.entries(props.initialState).length === 0
      && props.initialState.constructor === Object) {
      const fetchBlock = async () => {
        try {
          const resultBlock = await db.get('/neighborhood');
          const options = resultBlock.data.map((item) => item.name);

          setState((prevState) => ({
            ...prevState,
            neighborhoodList: options,
          }));
        } catch (error) {
          // ADICIONAR MENSAGEM POPUP
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
          // ADICIONAR MENSAGEM POPUP
        // eslint-disable-next-line no-console
          console.log(error);
        }
      };

      fetchBlock();
      fetchType();
    }
  }, []);

  // const val = React.useRef();
  // useEffect(
  //   () => {
  //     val.current = state;
  //   },
  //   [state],
  // );
  // useEffect(
  //   () => () => props.handleComponent('info', val.current),
  //   [val],
  // );

  return (
  // <div className="form">
  //   <Select
  //     hasLabel
  //     htmlFor="neighborhood-list"
  //     label="Bairro"
  //     options={state.neighborhoodList}
  //     onChange={handleChange}
  //     name="neighborhood_id"
  //     value={state.neighborhood_id}
  //   />

  //   <Select
  //     hasLabel
  //     htmlFor="property-type"
  //     label="Tipo de imóvel"
  //     options={state.typeList}
  //     onChange={handleChange}
  //     name="type_id"
  //     value={state.type_id}
  //   />

  //   <Radio
  //     hasLabel
  //     htmlFor="radioOne"
  //     label="Locação"
  //     name="purpose_id"
  //     onChange={handleChange}
  //     value={enums.purposeOfProperty.renting}
  //     state={state.purpose_id === enums.purposeOfProperty.renting ? 'checked' : null}
  //     required
  //   />

  //   <Radio
  //     hasLabel
  //     htmlFor="radioTwo"
  //     label="Venda"
  //     onChange={handleChange}
  //     value={enums.purposeOfProperty.selling}
  //     name="purpose_id"
  //     state={state.purpose_id === enums.purposeOfProperty.selling ? 'checked' : null}
  //     required
  //   />

  //   {
  //       state.isEditing
  //         ? (
  //           <Input
  //             hasLabel
  //             htmlFor="price"
  //             onChange={handleChange}
  //             label="Preço"
  //             required
  //             type="number"
  //             name="price"
  //             value={state.price}
  //             onBlur={toggleEditing}
  //           />
  //         )
  //         : (
  //           <Input
  //             hasLabel
  //             htmlFor="price"
  //             onChange={handleChange}
  //             label="Preço"
  //             required
  //             type="text"
  //             name="price"
  //             value={state.price}
  //             onFocus={toggleEditing}
  //             currency
  //           />
  //         )

  //   }

  //   <Input
  //     hasLabel
  //     htmlFor="area"
  //     onChange={handleChange}
  //     label="Área"
  //     required
  //     type="number"
  //     name="area"
  //     value={state.area}
  //     min="0"
  //     max="1000000000"
  //     step="10"
  //   />

  //   <Input
  //     hasLabel
  //     htmlFor="building_area"
  //     onChange={handleChange}
  //     label="Área Construída"
  //     required
  //     type="number"
  //     name="building_area"
  //     value={state.building_area}
  //     min="0"
  //     max="100000000"
  //     step="10"
  //   />

    // </div>
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        props.handleComponent('info', values);
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
            <div>
              <label htmlFor="area">
                {'Area'}
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

export default PropertyInfo;
