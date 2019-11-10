/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import React, { useState, useEffect } from 'react';

// import { ValidationInfo } from '../Helpers/Validation';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Formik } from 'formik';
import { db } from '../Helpers/ApiFetch';
import enums from '../../content/enums';

import './PropertyInfo.scss';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

export default function PropertyInfo(props) {
  const [state, setState] = useState({
    isEditing: false,
    neighborhoodList: [],
    typeList: [],
  });

  const classes = useStyles();


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

        const { neighborhoodList, typeList } = state;
        return (

          <form className="form-details" noValidate onSubmit={handleSubmit}>
            
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="neighborhood_id">Bairro</InputLabel>
              <Select
                native
                value={Number(values.neighborhood_id)}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: 'neighborhood_id',
                  id: 'neighborhood_id',
                }}
              >
                <option value={0}>Escolha uma opção</option>
                {neighborhoodList && neighborhoodList.length > 0
                  ? neighborhoodList.map((x, i) => <option key={x} value={i + 1}>{x}</option>)
                  : null}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="neighborhood_id">Tipo</InputLabel>
              <Select
                native
                value={Number(values.type_id)}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{
                  name: 'type_id',
                  id: 'type_id',
                }}
              >
                <option value={0}>Escolha uma opção</option>
                {typeList && typeList.length > 0
                  ? typeList.map((x, i) => <option key={x} value={i + 1}>{x}</option>)
                  : null}
              </Select>
            </FormControl>

            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>

                <FormControlLabel
                  control={(
                    <Checkbox
                      id="renting"
                      checked={values.renting}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.renting}
                      color="primary"
                    />
                )}
                  label="Locação"
                />

                <FormControlLabel
                  control={(
                    <Checkbox
                      id="selling"
                      checked={values.selling}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.selling}
                      color="primary"
                    />
                )}
                  label="Venda"
                />

              </FormGroup>
            </FormControl>

            <FormControl className="price-input" variant="outlined">
              <InputLabel htmlFor="price">Preço</InputLabel>
              <OutlinedInput
                id="price"
                name="price"
                value={values.price}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                labelWidth={60}
                type="number"
                error={errors.price}
              />
            </FormControl>
            <div className="area-group">

            <TextField
              id="area"
              label="Area"
              type="number"
              value={values.area}
              name="area"

              // className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              variant="outlined"
            />

            <TextField
              id="area"
              label="Area Construída"
              type="number"
              value={values.building_area}
              name="building_area"

              // className={classes.textField}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              variant="outlined"
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
