/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */

import React, { useState, useEffect } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Switch from '@material-ui/core/Switch';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { Formik } from 'formik';
import { ValidationInfo } from '../Helpers/Validation';
import db from '../Helpers/ApiFetch';
import enums from '../../content/enums';

import './PropertyInfo.scss';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function PropertyInfo(props) {
  const [state, setState] = useState({
    neighborhoodList: [],
    typeList: [],
  });

  const classes = useStyles();


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
      onSubmit={(values, { setSubmitting }) => {
        values.position = {
          lat: values.lat,
          long: values.lng,
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
                error={!!errors.neighborhood_id}

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
            {errors.neighborhood_id && touched.neighborhood_id ? (
              <div className="error-group">{errors.neighborhood_id}</div>
            ) : null}
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="neighborhood_id">Tipo</InputLabel>
              <Select
                native
                value={Number(values.type_id)}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.type_id}
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
            {errors.type_id && touched.type_id ? (
              <div className="error-group">{errors.type_id}</div>
            ) : null}
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                aria-label="purpose"
                id="purpose_id"
                name="purpose_id"
                value={Number(values.purpose_id)}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <FormControlLabel value={enums.purposeOfProperty.renting} control={<Radio />} label="Locação" />
                <FormControlLabel value={enums.purposeOfProperty.selling} control={<Radio />} label="Venda" />
              </RadioGroup>
            </FormControl>
            {errors.purpose_id && touched.purpose_id ? (
              <div className="error-group">{errors.purpose_id}</div>
            ) : null}


            <FormControl className="price-input" variant="outlined">
              <InputLabel htmlFor="price">Preço</InputLabel>
              <OutlinedInput
                id="price"
                name="price"
                value={Number(values.price)}
                onChange={handleChange}
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                labelWidth={60}
                type="number"
                error={!!errors.price}
              />
            </FormControl>
            {errors.price ? (
              <div className="error-group">{errors.price}</div>
            ) : null}
            <div className="txt-group">
              <TextField
                id="area"
                label="Area"
                type="number"
                value={values.area}
                name="area"
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
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
                error={!!errors.building_area}
              />
            </div>
            {errors.building_area && touched.building_area ? (
              <div className="error-group">{errors.building_area}</div>
            ) : null}

            <div className="txt-group">
              <TextField
                id="lat"
                label="Latitude"
                type="text"
                value={values.lat}
                name="lat"
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="lng"
                label="Longitude"
                type="text"
                value={values.lng}
                name="lng"
                onChange={handleChange}
                onBlur={handleBlur}
                margin="normal"
                variant="outlined"
              />
            </div>

            <FormControlLabel
              control={(
                <Switch
                  id="building_loan"
                  name="building_loan"
                  checked={values.building_loan}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.building_loan}
                  color="primary"
                />
              )}
              label="Financiamento"
            />

            <FormControlLabel
              control={(
                <Switch
                  id="exchange"
                  name="exchange"
                  checked={values.exchange}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.exchange}
                  color="primary"
                />
              )}
              label="Permuta"
            />

            <FormControlLabel
              control={(
                <Switch
                  id="isVisible"
                  name="isVisible"
                  checked={values.isVisible}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.isVisible}
                  color="primary"
                />
              )}
              label="Visibilidade"
            />
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
  this.purpose_id = Number(data.purpose_id) || 1;
  this.type_id = data.type_id || 0;
  this.area = data.area || 0;
  this.building_area = data.building_area || 0;
  this.exchange = data.exchange || false;
  this.building_loan = data.building_loan || false;
  this.isVisible = data.isvisible || true;
  this.creator_id = data.creator_id || 1;

  return (
    this.neighborhood_id,
    this.position,
    this.price,
    this.purpose_id,
    this.type_id,
    this.creator_id,
    this.area,
    this.building_area,
    this.exchange,
    this.building_loan,
    this.isVisible
  );
}

export {
  Info,
};
